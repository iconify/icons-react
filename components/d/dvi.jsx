import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/w/w1-p0tbrq.css';
import '../../css/e/e1ncvtq3p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOmD20bfv"><g class="wwvp95byt"><path class="w1-p0tbrq"/><path class="e1ncvtq3p"/></g></mask></defs><path mask="url(#SVGOmD20bfv)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:dvi",
	});
}

export default Component;

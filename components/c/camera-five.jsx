import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/u/uhh24bcyt.css';
import '../../css/l/l96_62b1m.css';
import '../../css/w/whl-mbhit.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG1dZogcng"><g class="rohhhzb0l"><circle class="uhh24bcyt"/><circle class="l96_62b1m"/><path class="whl-mbhit"/></g></mask></defs><path mask="url(#SVG1dZogcng)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:camera-five",
	});
}

export default Component;

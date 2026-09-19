import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/m/mzszod_2j.css';
import '../../css/x/xb3trfbyy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG8fP50dUS"><g class="wwvp95byt"><circle class="mzszod_2j"/><path class="xb3trfbyy"/></g></mask></defs><path mask="url(#SVG8fP50dUS)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:handle-square",
	});
}

export default Component;

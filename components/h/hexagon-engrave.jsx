import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hkz12t8dl.css';
import '../../css/s/svkvmye9m.css';
import '../../css/t/tf9_0-uqj.css';
import '../../css/h/h-upcp83y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hkz12t8dl wm-k"/><path class="svkvmye9m wm-shadow"/><path class="tf9_0-uqj wm-k"/><path class="h-upcp83y wm-a"/></g>`,
		"fallback": "withicons:hexagon-engrave",
	});
}

export default Component;

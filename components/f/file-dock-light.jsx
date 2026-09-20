import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/i/irzp74b2d.css';
import '../../css/l/lepgkoxkn.css';
import '../../css/f/fvhj0vbhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="irzp74b2d"/><path class="lepgkoxkn"/><path class="fvhj0vbhb"/></g>`,
		"fallback": "lets-icons:file-dock-light",
	});
}

export default Component;

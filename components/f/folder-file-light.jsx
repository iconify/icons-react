import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/x/xrfgp0bpp.css';
import '../../css/q/qu5_95b4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="xrfgp0bpp"/><path class="qu5_95b4t"/></g>`,
		"fallback": "lets-icons:folder-file-light",
	});
}

export default Component;

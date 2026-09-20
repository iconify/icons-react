import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
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
		"content": `<g class="h01tyzbfu"><path class="lepgkoxkn"/><path class="fvhj0vbhb"/></g>`,
		"fallback": "lets-icons:file-light",
	});
}

export default Component;

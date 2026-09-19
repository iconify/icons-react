import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/f/f8mualbjk.css';
import '../../css/z/z2gyqt3jv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="f8mualbjk"/><path class="z2gyqt3jv"/></g>`,
		"fallback": "guidance:forbidden",
	});
}

export default Component;

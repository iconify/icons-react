import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/ca7pc8b-f.css';
import '../../css/q/qkacyrwvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ca7pc8b-f"/><path class="qkacyrwvc"/></g>`,
		"fallback": "withicons:bluetooth-duo",
	});
}

export default Component;

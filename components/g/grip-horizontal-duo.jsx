import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/el7jsqzhg.css';
import '../../css/p/pyp3in7xr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="el7jsqzhg"/><path class="pyp3in7xr"/></g>`,
		"fallback": "withicons:grip-horizontal-duo",
	});
}

export default Component;

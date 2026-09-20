import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/stl76lgmx.css';
import '../../css/y/yufs04v9o.css';
import '../../css/q/qx6nnqbto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="stl76lgmx"/><path class="yufs04v9o"/><path class="qx6nnqbto"/></g>`,
		"fallback": "streamline-cyber-color:ferris-wheel-1",
	});
}

export default Component;

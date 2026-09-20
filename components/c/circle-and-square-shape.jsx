import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/ld7j91dtg.css';
import '../../css/d/dbhlwxb6w.css';
import '../../css/e/eqrmnkbgv.css';
import '../../css/c/cpvnn28vk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="ld7j91dtg"/><path class="dbhlwxb6w"/><path class="eqrmnkbgv"/><path class="cpvnn28vk"/></g>`,
		"fallback": "streamline-plump-color:circle-and-square-shape",
	});
}

export default Component;

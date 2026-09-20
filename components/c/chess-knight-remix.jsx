import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pso53qx3c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pso53qx3c"/>`,
		"fallback": "streamline:chess-knight-remix",
	});
}

export default Component;

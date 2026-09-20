import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9q_z2bvh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h9q_z2bvh"/>`,
		"fallback": "streamline:chess-knight-solid",
	});
}

export default Component;

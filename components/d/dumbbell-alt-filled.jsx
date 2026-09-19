import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq0e7yb2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq0e7yb2g"/>`,
		"fallback": "boxicons:dumbbell-alt-filled",
	});
}

export default Component;

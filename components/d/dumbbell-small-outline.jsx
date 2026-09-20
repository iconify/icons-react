import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghj_vqn2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ghj_vqn2i"/>`,
		"fallback": "solar:dumbbell-small-outline",
	});
}

export default Component;

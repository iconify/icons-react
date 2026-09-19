import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/punl4aceo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="punl4aceo"/>`,
		"fallback": "hugeicons:flame-kindling",
	});
}

export default Component;

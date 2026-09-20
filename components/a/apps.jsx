import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fa6ra5b2y.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fa6ra5b2y"/>`,
		"fallback": "memory:apps",
	});
}

export default Component;

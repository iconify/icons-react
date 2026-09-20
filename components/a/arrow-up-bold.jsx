import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpkwgyn6w.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpkwgyn6w"/>`,
		"fallback": "memory:arrow-up-bold",
	});
}

export default Component;

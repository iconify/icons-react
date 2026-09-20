import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fedupdbfj.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fedupdbfj"/>`,
		"fallback": "memory:arrow-up-right",
	});
}

export default Component;

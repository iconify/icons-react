import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khhnz4-5j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khhnz4-5j"/>`,
		"fallback": "energy-icons:energy-cooperative-20",
	});
}

export default Component;

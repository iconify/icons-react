import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke-vqfa8s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke-vqfa8s"/>`,
		"fallback": "heroicons:adjustments-vertical-20-solid",
	});
}

export default Component;

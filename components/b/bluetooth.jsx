import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpkbf0bpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpkbf0bpj"/>`,
		"fallback": "hugeicons:bluetooth",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z38k6nb-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z38k6nb-p"/>`,
		"fallback": "bitcoin-icons:flip-horizontal-outline",
	});
}

export default Component;

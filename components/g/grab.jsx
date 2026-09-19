import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ei_1tabmg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ei_1tabmg"/>`,
		"fallback": "pepicons:grab",
	});
}

export default Component;

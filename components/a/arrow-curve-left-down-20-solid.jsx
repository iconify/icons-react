import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kx416_bvh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kx416_bvh"/>`,
		"fallback": "sidekickicons:arrow-curve-left-down-20-solid",
	});
}

export default Component;

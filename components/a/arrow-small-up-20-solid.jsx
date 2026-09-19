import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_goi9h2x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k_goi9h2x"/>`,
		"fallback": "heroicons:arrow-small-up-20-solid",
	});
}

export default Component;

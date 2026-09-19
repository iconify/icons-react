import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clpqvbb-t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clpqvbb-t"/>`,
		"fallback": "heroicons:arrow-down-on-square-20-solid",
	});
}

export default Component;

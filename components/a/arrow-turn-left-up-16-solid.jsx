import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ub05ksbjs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ub05ksbjs"/>`,
		"fallback": "heroicons:arrow-turn-left-up-16-solid",
	});
}

export default Component;

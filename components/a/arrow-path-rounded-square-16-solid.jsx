import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehk72fbzr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ehk72fbzr"/>`,
		"fallback": "heroicons:arrow-path-rounded-square-16-solid",
	});
}

export default Component;

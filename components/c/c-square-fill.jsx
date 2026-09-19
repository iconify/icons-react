import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktjh27ryf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktjh27ryf"/>`,
		"fallback": "bi:c-square-fill",
	});
}

export default Component;

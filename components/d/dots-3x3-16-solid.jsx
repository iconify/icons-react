import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cd20mybht.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cd20mybht"/>`,
		"fallback": "sidekickicons:dots-3x3-16-solid",
	});
}

export default Component;

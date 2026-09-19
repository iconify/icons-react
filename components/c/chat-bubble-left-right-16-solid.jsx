import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-wc1tbbt.css';
import '../../css/o/ozoz27b5u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-wc1tbbt"/><path class="ozoz27b5u"/>`,
		"fallback": "heroicons:chat-bubble-left-right-16-solid",
	});
}

export default Component;

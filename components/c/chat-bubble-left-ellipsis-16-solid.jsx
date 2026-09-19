import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nf1u95bfr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nf1u95bfr"/>`,
		"fallback": "heroicons:chat-bubble-left-ellipsis-16-solid",
	});
}

export default Component;

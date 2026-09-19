import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw6penbap.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pw6penbap"/>`,
		"fallback": "fa7-regular:closed-captioning",
	});
}

export default Component;

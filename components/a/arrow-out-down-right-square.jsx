import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5pr-v-xw.css';
import '../../css/y/yf1avm6ta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5pr-v-xw"/><path class="yf1avm6ta"/>`,
		"fallback": "boxicons:arrow-out-down-right-square",
	});
}

export default Component;

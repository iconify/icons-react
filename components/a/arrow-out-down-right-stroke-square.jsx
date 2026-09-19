import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zib0qbour.css';
import '../../css/k/k5pr-v-xw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zib0qbour"/><path class="k5pr-v-xw"/>`,
		"fallback": "boxicons:arrow-out-down-right-stroke-square",
	});
}

export default Component;

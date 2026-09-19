import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j082ynusa.css';
import '../../css/l/lqhgtqdtq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j082ynusa"/><path class="lqhgtqdtq"/>`,
		"fallback": "boxicons:arrow-out-up-left-stroke-square",
	});
}

export default Component;

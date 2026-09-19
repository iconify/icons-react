import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqhgtqdtq.css';
import '../../css/c/c924plbqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqhgtqdtq"/><path class="c924plbqp"/>`,
		"fallback": "boxicons:arrow-out-up-left-square",
	});
}

export default Component;

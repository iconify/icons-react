import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qp3swzbkr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qp3swzbkr"/>`,
		"fallback": "streamline-color:arrow-crossover-right",
	});
}

export default Component;

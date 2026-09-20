import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unsftc1qj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unsftc1qj"/>`,
		"fallback": "streamline-color:arrow-down-dashed-square",
	});
}

export default Component;

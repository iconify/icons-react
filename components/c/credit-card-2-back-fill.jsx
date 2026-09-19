import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q92jog0yx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q92jog0yx"/>`,
		"fallback": "bi:credit-card-2-back-fill",
	});
}

export default Component;

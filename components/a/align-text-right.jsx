import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-qk5zavh.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-qk5zavh"/>`,
		"fallback": "lineicons:align-text-right",
	});
}

export default Component;

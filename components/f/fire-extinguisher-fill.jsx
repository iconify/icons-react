import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ku7oxq-5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ku7oxq-5t"/>`,
		"fallback": "mingcute:fire-extinguisher-fill",
	});
}

export default Component;

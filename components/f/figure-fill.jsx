import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzc1np7iu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzc1np7iu"/>`,
		"fallback": "mingcute:figure-fill",
	});
}

export default Component;

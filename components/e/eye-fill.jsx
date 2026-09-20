import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujesk2bhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujesk2bhj"/>`,
		"fallback": "mingcute:eye-fill",
	});
}

export default Component;

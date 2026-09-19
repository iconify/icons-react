import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqkvw4bur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqkvw4bur"/>`,
		"fallback": "boxicons:element-of-filled",
	});
}

export default Component;

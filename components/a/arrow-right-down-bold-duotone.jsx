import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zl1y521md.css';
import '../../css/l/lqz0ivbkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zl1y521md"/><path class="lqz0ivbkk"/>`,
		"fallback": "solar:arrow-right-down-bold-duotone",
	});
}

export default Component;

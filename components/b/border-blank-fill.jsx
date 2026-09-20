import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6t5y4_fb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6t5y4_fb"/>`,
		"fallback": "mingcute:border-blank-fill",
	});
}

export default Component;

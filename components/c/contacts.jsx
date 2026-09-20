import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfikmeb1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfikmeb1o"/>`,
		"fallback": "keyline-icons:contacts",
	});
}

export default Component;

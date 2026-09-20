import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi24fmf5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi24fmf5u"/>`,
		"fallback": "uil:crop-alt-rotate-right",
	});
}

export default Component;

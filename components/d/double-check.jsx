import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjvborlel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjvborlel"/>`,
		"fallback": "akar-icons:double-check",
	});
}

export default Component;

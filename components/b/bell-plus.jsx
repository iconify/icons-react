import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5f0tenvo.css';
import '../../css/j/j2ldz72eb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5f0tenvo"/><path class="j2ldz72eb"/>`,
		"fallback": "bx:bell-plus",
	});
}

export default Component;

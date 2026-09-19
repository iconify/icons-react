import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c98at3bul.css';
import '../../css/t/t6wz8cb3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c98at3bul"/><circle class="t6wz8cb3t"/>`,
		"fallback": "bx:bx-dice-1",
	});
}

export default Component;

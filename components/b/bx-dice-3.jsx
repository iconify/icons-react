import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c98at3bul.css';
import '../../css/z/z4-r-ybfy.css';
import '../../css/t/t6wz8cb3t.css';
import '../../css/w/wifws7q6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c98at3bul"/><circle class="z4-r-ybfy"/><circle class="t6wz8cb3t"/><circle class="wifws7q6t"/>`,
		"fallback": "bx:bx-dice-3",
	});
}

export default Component;

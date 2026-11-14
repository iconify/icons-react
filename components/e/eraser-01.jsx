import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv7tfu3sf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lv7tfu3sf"/>`,
		"fallback": "hugeicons:eraser-01",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vguzjbcap.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vguzjbcap"/>`,
		"fallback": "f7:calendar-today",
	});
}

export default Component;

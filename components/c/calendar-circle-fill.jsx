import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrn8-zb9r.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrn8-zb9r"/>`,
		"fallback": "f7:calendar-circle-fill",
	});
}

export default Component;

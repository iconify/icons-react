import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5pa9y0qr.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5pa9y0qr"/>`,
		"fallback": "f7:chevron-up-circle",
	});
}

export default Component;

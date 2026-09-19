import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lau9ehbpl.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lau9ehbpl"/>`,
		"fallback": "f7:arrow-up-right-circle-fill",
	});
}

export default Component;

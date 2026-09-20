import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmdw-9bte.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmdw-9bte"/>`,
		"fallback": "system-uicons:arrow-right",
	});
}

export default Component;

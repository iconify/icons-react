import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct-4h76ph.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ct-4h76ph"/>`,
		"fallback": "system-uicons:arrow-top-left",
	});
}

export default Component;

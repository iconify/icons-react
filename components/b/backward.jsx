import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t38e9cb8e.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t38e9cb8e"/>`,
		"fallback": "system-uicons:backward",
	});
}

export default Component;

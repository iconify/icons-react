import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk2h56bor.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rk2h56bor"/>`,
		"fallback": "system-uicons:coffee",
	});
}

export default Component;

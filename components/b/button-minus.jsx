import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmc0r12qn.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmc0r12qn"/>`,
		"fallback": "system-uicons:button-minus",
	});
}

export default Component;

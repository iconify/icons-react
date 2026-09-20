import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fycokac1q.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fycokac1q"/>`,
		"fallback": "system-uicons:button-add",
	});
}

export default Component;

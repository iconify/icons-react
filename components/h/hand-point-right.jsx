import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td4grnbkl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="td4grnbkl"/>`,
		"fallback": "cil:hand-point-right",
	});
}

export default Component;

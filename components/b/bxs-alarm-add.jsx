import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/op7gaobel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="op7gaobel"/>`,
		"fallback": "bx:bxs-alarm-add",
	});
}

export default Component;

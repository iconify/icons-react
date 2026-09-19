import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6_x99d5i.css';

const viewBox = {"width":432,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6_x99d5i"/>`,
		"fallback": "ps:hand-pointer-right",
	});
}

export default Component;

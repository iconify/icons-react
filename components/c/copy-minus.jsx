import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr1lh7bho.css';
import '../../css/r/r5xn4h6qs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr1lh7bho"/><path class="r5xn4h6qs"/>`,
		"fallback": "boxicons:copy-minus",
	});
}

export default Component;

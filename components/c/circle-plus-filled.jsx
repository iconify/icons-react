import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6_fy5bjt.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6_fy5bjt"/>`,
		"fallback": "ep:circle-plus-filled",
	});
}

export default Component;

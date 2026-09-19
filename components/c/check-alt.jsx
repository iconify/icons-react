import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4z4ccbhv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4z4ccbhv"/>`,
		"fallback": "cil:check-alt",
	});
}

export default Component;

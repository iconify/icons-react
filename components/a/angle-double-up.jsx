import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq8ox75ei.css';
import '../../css/r/r3i--soji.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dq8ox75ei"/><path class="r3i--soji"/>`,
		"fallback": "lineicons:angle-double-up",
	});
}

export default Component;

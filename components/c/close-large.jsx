import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi2q6_b3e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi2q6_b3e"/>`,
		"fallback": "carbon:close-large",
	});
}

export default Component;

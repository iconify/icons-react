import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry1utab1p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ry1utab1p"/>`,
		"fallback": "radix-icons:check",
	});
}

export default Component;

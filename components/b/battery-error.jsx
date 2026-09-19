import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ag11jn0th.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ag11jn0th"/>`,
		"fallback": "carbon:battery-error",
	});
}

export default Component;

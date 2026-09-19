import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5nekx9ky.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5nekx9ky"/>`,
		"fallback": "carbon:add-parent-node",
	});
}

export default Component;

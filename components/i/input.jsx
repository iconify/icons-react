import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zn9yuy7we.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zn9yuy7we"/>`,
		"fallback": "radix-icons:input",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2ztnobjo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2ztnobjo"/>`,
		"fallback": "radix-icons:badge",
	});
}

export default Component;

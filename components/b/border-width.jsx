import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqfk_pb6e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqfk_pb6e"/>`,
		"fallback": "radix-icons:border-width",
	});
}

export default Component;

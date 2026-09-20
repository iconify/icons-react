import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j28c1wjbm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j28c1wjbm"/>`,
		"fallback": "radix-icons:divider-horizontal",
	});
}

export default Component;

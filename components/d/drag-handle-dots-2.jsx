import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx89iwb8d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zx89iwb8d"/>`,
		"fallback": "radix-icons:drag-handle-dots-2",
	});
}

export default Component;

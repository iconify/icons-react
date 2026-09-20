import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmxw-7_3j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmxw-7_3j"/>`,
		"fallback": "radix-icons:crop",
	});
}

export default Component;

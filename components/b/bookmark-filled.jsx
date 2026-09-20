import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv1x4edtl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nv1x4edtl"/>`,
		"fallback": "radix-icons:bookmark-filled",
	});
}

export default Component;

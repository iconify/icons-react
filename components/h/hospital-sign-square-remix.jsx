import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zj-5oz67e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zj-5oz67e"/>`,
		"fallback": "streamline:hospital-sign-square-remix",
	});
}

export default Component;

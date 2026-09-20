import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vma9j-bwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vma9j-bwu"/>`,
		"fallback": "tdesign:greater-than-or-equal",
	});
}

export default Component;

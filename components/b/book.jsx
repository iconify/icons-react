import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbhxcpbvt.css';
import '../../css/h/hd8ss2bbz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbhxcpbvt"/><path class="hd8ss2bbz"/>`,
		"fallback": "carbon:book",
	});
}

export default Component;

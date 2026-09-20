import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkvaaub1o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkvaaub1o"/>`,
		"fallback": "streamline-pixel:email-envelope-close",
	});
}

export default Component;

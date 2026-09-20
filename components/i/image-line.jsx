import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbcr950-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbcr950-o"/>`,
		"fallback": "majesticons:image-line",
	});
}

export default Component;

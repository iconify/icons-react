import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srr2jxk_h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srr2jxk_h"/>`,
		"fallback": "bi:flask",
	});
}

export default Component;

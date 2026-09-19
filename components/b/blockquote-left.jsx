import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/saqshzb8e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="saqshzb8e"/>`,
		"fallback": "bi:blockquote-left",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-k-cebwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-k-cebwl"/>`,
		"fallback": "bxl:claude-ai",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k43-1iple.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k43-1iple"/>`,
		"fallback": "ix:code-ai",
	});
}

export default Component;

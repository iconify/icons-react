import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xct69xb9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xct69xb9o"/>`,
		"fallback": "ci:arrow-left-right",
	});
}

export default Component;

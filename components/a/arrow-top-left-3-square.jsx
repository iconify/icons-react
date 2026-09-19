import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0f3uzzwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0f3uzzwc"/>`,
		"fallback": "iconamoon:arrow-top-left-3-square",
	});
}

export default Component;

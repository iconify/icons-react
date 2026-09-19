import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5257yb9v.css';
import '../../css/w/wgc4b7bwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="j5257yb9v"/><path class="wgc4b7bwl"/>`,
		"fallback": "bx:bx-accessibility",
	});
}

export default Component;

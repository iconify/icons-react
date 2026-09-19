import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c1zroabhi.css';
import '../../css/y/yg0_jekpa.css';
import '../../css/i/i64j2pb3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="c1zroabhi"/><path class="yg0_jekpa"/><path class="i64j2pb3i"/></g>`,
		"fallback": "hugeicons:dental-braces",
	});
}

export default Component;

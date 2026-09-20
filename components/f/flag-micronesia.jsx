import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydht5db_k.css';
import '../../css/d/dwf-7o5jt.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydht5db_k"/><path class="dwf-7o5jt"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-micronesia",
	});
}

export default Component;

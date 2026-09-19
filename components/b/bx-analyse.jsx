import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jeo6el_jt.css';
import '../../css/o/op5c-pbsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jeo6el_jt"/><path class="op5c-pbsh"/>`,
		"fallback": "bx:bx-analyse",
	});
}

export default Component;

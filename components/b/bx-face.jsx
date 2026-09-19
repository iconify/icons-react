import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4gq1ibch.css';
import '../../css/x/x-l7iicwp.css';
import '../../css/i/ikrkupm8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4gq1ibch"/><circle class="x-l7iicwp"/><circle class="ikrkupm8l"/>`,
		"fallback": "bx:bx-face",
	});
}

export default Component;

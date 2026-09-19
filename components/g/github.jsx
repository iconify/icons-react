import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr1nhacmb.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr1nhacmb"/>`,
		"fallback": "codicon:github",
	});
}

export default Component;

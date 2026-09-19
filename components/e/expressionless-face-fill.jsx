import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb6fw3bhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jb6fw3bhp"/>`,
		"fallback": "iconamoon:expressionless-face-fill",
	});
}

export default Component;

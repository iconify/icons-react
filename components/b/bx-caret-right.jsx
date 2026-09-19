import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrqjhtb1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrqjhtb1i"/>`,
		"fallback": "bx:bx-caret-right",
	});
}

export default Component;

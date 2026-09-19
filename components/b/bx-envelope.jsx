import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg4x4-miu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg4x4-miu"/>`,
		"fallback": "bx:bx-envelope",
	});
}

export default Component;

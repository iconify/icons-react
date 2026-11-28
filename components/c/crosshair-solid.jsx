import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkeux50xh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkeux50xh"/>`,
		"fallback": "iconaut:crosshair-solid",
	});
}

export default Component;

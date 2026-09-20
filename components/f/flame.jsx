import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtjtu7pvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtjtu7pvv"/>`,
		"fallback": "mynaui:flame",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsnapl6dc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsnapl6dc"/>`,
		"fallback": "mdi:gamepad-variant-outline",
	});
}

export default Component;

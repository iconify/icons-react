import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eow-9nb1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eow-9nb1b"/>`,
		"fallback": "mdi:clock-plus",
	});
}

export default Component;

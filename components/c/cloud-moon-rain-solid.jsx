import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjok1613k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjok1613k"/>`,
		"fallback": "iconaut:cloud-moon-rain-solid",
	});
}

export default Component;

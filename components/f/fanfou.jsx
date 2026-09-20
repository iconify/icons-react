import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdg6ipbwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdg6ipbwz"/>`,
		"fallback": "thesvg-color:fanfou",
	});
}

export default Component;

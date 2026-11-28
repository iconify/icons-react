import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvayf1bze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvayf1bze"/>`,
		"fallback": "iconaut:corner-inverted-solid",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/miq6brhkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="miq6brhkl"/>`,
		"fallback": "noviair-light:chess-bishop",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxq44iahj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxq44iahj"/>`,
		"fallback": "noviair-light:bookmark-plus",
	});
}

export default Component;

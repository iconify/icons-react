import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy8qzf7qn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xy8qzf7qn"/>`,
		"fallback": "noviair-light:guitar",
	});
}

export default Component;

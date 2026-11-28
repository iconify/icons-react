import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_x43ob0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_x43ob0g"/>`,
		"fallback": "noviair-light:home-gear",
	});
}

export default Component;

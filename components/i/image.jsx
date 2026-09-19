import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1d5c563g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1d5c563g"/>`,
		"fallback": "bxs:image",
	});
}

export default Component;

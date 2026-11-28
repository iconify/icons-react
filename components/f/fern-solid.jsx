import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmp5x_b5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmp5x_b5z"/>`,
		"fallback": "iconaut:fern-solid",
	});
}

export default Component;

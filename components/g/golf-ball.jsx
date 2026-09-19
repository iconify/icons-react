import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2bivto0z.css';

const viewBox = {"width":416,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2bivto0z"/>`,
		"fallback": "fa-solid:golf-ball",
	});
}

export default Component;

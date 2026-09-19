import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1od96b5f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1od96b5f"/>`,
		"fallback": "game-icons:duffel-bag",
	});
}

export default Component;

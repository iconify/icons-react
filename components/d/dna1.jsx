import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m46one6gc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m46one6gc"/>`,
		"fallback": "game-icons:dna1",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkozmf4nd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkozmf4nd"/>`,
		"fallback": "game-icons:abstract-074",
	});
}

export default Component;

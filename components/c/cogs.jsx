import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgj2zbb7p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgj2zbb7p"/>`,
		"fallback": "la:cogs",
	});
}

export default Component;

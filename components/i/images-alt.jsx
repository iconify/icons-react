import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrlaa7wkd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrlaa7wkd"/>`,
		"fallback": "dashicons:images-alt",
	});
}

export default Component;

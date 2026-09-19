import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us8wt9b6x.css';

const viewBox = {"width":472,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us8wt9b6x"/>`,
		"fallback": "zmdi:aspect-ratio-alt",
	});
}

export default Component;

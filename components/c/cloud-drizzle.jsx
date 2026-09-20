import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwl9ebcyp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwl9ebcyp"/>`,
		"fallback": "oui:cloud-drizzle",
	});
}

export default Component;

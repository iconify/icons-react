import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1w9q6o5b.css';
import '../../css/d/d9t-opb0z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1w9q6o5b"/><path class="d9t-opb0z"/>`,
		"fallback": "energy-icons:badge-20-bold",
	});
}

export default Component;

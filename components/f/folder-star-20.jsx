import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3me-4caq.css';
import '../../css/r/rr-f5tb6z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3me-4caq"/><path class="rr-f5tb6z"/>`,
		"fallback": "energy-icons:folder-star-20",
	});
}

export default Component;

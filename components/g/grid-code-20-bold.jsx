import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny-w6qbwa.css';
import '../../css/i/iw77clbuo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ny-w6qbwa"/><path class="iw77clbuo"/>`,
		"fallback": "energy-icons:grid-code-20-bold",
	});
}

export default Component;

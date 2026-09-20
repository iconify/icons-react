import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj7w4ccsq.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nj7w4ccsq"/>`,
		"fallback": "iwwa:chart-style3",
	});
}

export default Component;

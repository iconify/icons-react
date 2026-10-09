import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1w0d8d4j.css';
import '../../css/i/i0y7ncbnv.css';
import '../../css/f/f54j4-b-y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1w0d8d4j"/><path class="i0y7ncbnv"/><path class="f54j4-b-y"/>`,
		"fallback": "energy-icons:building-check-48",
	});
}

export default Component;

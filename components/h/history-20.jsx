import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thr7ovb8q.css';
import '../../css/o/ogpkn9bgh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thr7ovb8q"/><path class="ogpkn9bgh"/>`,
		"fallback": "energy-icons:history-20",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbdwctb6r.css';
import '../../css/w/w2y26nmkr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbdwctb6r"/><path class="w2y26nmkr"/>`,
		"fallback": "energy-icons:disconnector-20-bold",
	});
}

export default Component;

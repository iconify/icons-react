import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ws7p95bcl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ws7p95bcl"/>`,
		"fallback": "energy-icons:caret-right-20-bold",
	});
}

export default Component;

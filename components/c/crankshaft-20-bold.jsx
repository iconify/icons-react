import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xquc5jbvi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xquc5jbvi"/>`,
		"fallback": "energy-icons:crankshaft-20-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/buk4h-b4t.css';
import '../../css/o/om5drtboh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="buk4h-b4t"/><path class="om5drtboh"/>`,
		"fallback": "energy-icons:camera-off-20-bold",
	});
}

export default Component;

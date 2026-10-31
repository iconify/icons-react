import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qemcyt1xs.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qemcyt1xs"/>`,
		"fallback": "pinhead:car-in-gabled-building",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6eh32bir.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6eh32bir"/>`,
		"fallback": "energy-icons:barcode-20-bold",
	});
}

export default Component;

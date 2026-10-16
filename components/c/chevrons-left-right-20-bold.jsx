import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwob-oc1z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwob-oc1z"/>`,
		"fallback": "energy-icons:chevrons-left-right-20-bold",
	});
}

export default Component;

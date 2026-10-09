import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnlv8uood.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnlv8uood"/>`,
		"fallback": "energy-icons:grip-horizontal-20-bold",
	});
}

export default Component;

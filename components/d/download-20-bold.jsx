import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm6fofg8e.css';
import '../../css/j/j9dw79bzp.css';
import '../../css/o/oypn0j-vn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm6fofg8e"/><path class="j9dw79bzp"/><path class="oypn0j-vn"/>`,
		"fallback": "energy-icons:download-20-bold",
	});
}

export default Component;

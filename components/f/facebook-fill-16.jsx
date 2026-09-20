import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi8zxrbxy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pi8zxrbxy"/>`,
		"fallback": "qlementine-icons:facebook-fill-16",
	});
}

export default Component;

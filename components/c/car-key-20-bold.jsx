import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2ezievuu.css';
import '../../css/h/h0hx-t7ds.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2ezievuu"/><path class="h0hx-t7ds"/>`,
		"fallback": "energy-icons:car-key-20-bold",
	});
}

export default Component;

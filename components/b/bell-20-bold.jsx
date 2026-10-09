import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov19mnblx.css';
import '../../css/z/zpo4y_beo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ov19mnblx"/><path class="zpo4y_beo"/>`,
		"fallback": "energy-icons:bell-20-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1y_4bigl.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1y_4bigl"/>`,
		"fallback": "zmdi:archive",
	});
}

export default Component;

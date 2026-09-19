import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3q0eviez.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3q0eviez"/>`,
		"fallback": "entypo:compass",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9y_fntnb.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9y_fntnb"/>`,
		"fallback": "fa6-brands:amazon",
	});
}

export default Component;

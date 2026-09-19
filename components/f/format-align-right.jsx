import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9267wbgl.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9267wbgl"/>`,
		"fallback": "zmdi:format-align-right",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb9hnubnd.css';

const viewBox = {"width":384,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb9hnubnd"/>`,
		"fallback": "zmdi:bluetooth-connected",
	});
}

export default Component;

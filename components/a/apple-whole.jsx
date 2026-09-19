import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqwj2_7hk.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqwj2_7hk"/>`,
		"fallback": "fa6-solid:apple-whole",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp_7a8bjw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp_7a8bjw"/>`,
		"fallback": "osmic:fountain-14",
	});
}

export default Component;

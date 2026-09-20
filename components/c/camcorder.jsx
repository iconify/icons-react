import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfc2vbcbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfc2vbcbh"/>`,
		"fallback": "mdi-light:camcorder",
	});
}

export default Component;

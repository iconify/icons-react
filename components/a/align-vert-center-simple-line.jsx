import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcjfcjp-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcjfcjp-c"/>`,
		"fallback": "si:align-vert-center-simple-line",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9npbdcjc.css';
import '../../css/d/d8axicc0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9npbdcjc"/><path class="d8axicc0u"/>`,
		"fallback": "bxl:instagram",
	});
}

export default Component;

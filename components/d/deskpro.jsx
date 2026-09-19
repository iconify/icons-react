import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztsv9wbdd.css';

const viewBox = {"width":480,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztsv9wbdd"/>`,
		"fallback": "fa6-brands:deskpro",
	});
}

export default Component;

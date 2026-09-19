import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy_ykxojr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yy_ykxojr"/>`,
		"fallback": "flowbite:envelope-open-outline",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yaoyf82ot.css';
import '../../css/v/vmj_u5b4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yaoyf82ot"/><path class="vmj_u5b4k"/>`,
		"fallback": "solar:add-bold-duotone",
	});
}

export default Component;

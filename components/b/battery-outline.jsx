import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/yiynbpjky.css';
import '../../css/c/c2o4e4sms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="yiynbpjky"/><path class="c2o4e4sms"/></g>`,
		"fallback": "flowbite:battery-outline",
	});
}

export default Component;

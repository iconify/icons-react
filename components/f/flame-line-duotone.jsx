import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gd0w_ccms.css';
import '../../css/y/yzgng2c6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gd0w_ccms"/><path class="yzgng2c6r"/></g>`,
		"fallback": "solar:flame-line-duotone",
	});
}

export default Component;

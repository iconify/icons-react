import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/tn8ic7bdh.css';
import '../../css/p/p7_8ibche.css';
import '../../css/g/g_iozjbjh.css';
import '../../css/x/xoj0g-b6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="tn8ic7bdh wm-shadow"/><path class="p7_8ibche wm-shadow"/><path class="g_iozjbjh"/><path class="xoj0g-b6o"/></g>`,
		"fallback": "withicons-brutal:battery-full",
	});
}

export default Component;

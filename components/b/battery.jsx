import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/tn8ic7bdh.css';
import '../../css/p/p7_8ibche.css';
import '../../css/z/zb86owb-x.css';
import '../../css/t/tmzn98b0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="tn8ic7bdh wm-shadow"/><path class="p7_8ibche wm-shadow"/><path class="zb86owb-x"/><path class="tmzn98b0y"/></g>`,
		"fallback": "withicons-brutal:battery",
	});
}

export default Component;

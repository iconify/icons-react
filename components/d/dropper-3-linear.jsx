import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xjwylvpfw.css';
import '../../css/w/w9wkd2b5z.css';
import '../../css/y/yncuteb8b.css';
import '../../css/m/msronwbal.css';
import '../../css/o/o95ej6b5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xjwylvpfw"/><path class="w9wkd2b5z"/><path class="yncuteb8b"/><path class="msronwbal"/><path class="o95ej6b5s"/></g>`,
		"fallback": "solar:dropper-3-linear",
	});
}

export default Component;

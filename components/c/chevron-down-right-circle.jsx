import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/apkvtsbfv.css';
import '../../css/n/n04szjpnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="apkvtsbfv"/><path class="n04szjpnk"/></g>`,
		"fallback": "mynaui:chevron-down-right-circle",
	});
}

export default Component;

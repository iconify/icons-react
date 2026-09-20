import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tjn-e4bgs.css';
import '../../css/n/n04szjpnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tjn-e4bgs"/><path class="n04szjpnk"/></g>`,
		"fallback": "mynaui:arrow-down-right-circle",
	});
}

export default Component;

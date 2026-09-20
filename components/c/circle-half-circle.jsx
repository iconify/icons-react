import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n04szjpnk.css';
import '../../css/h/hntgybcog.css';
import '../../css/y/y0pjkbb8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGU06AidGb" class="n04szjpnk"/></defs><g class="hntgybcog"><use href="#SVGU06AidGb"/><use href="#SVGU06AidGb"/><path class="y0pjkbb8q"/></g>`,
		"fallback": "mynaui:circle-half-circle",
	});
}

export default Component;

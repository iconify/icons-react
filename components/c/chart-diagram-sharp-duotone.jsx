import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/y8h4mpjlh.css';
import '../../css/y/ysdtivubw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="y8h4mpjlh"/><path class="ysdtivubw"/></g>`,
		"fallback": "keyline-icons:chart-diagram-sharp-duotone",
	});
}

export default Component;

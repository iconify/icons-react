import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/juuueeb2w.css';
import '../../css/t/t46wqttie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="juuueeb2w"/><path class="t46wqttie"/></g>`,
		"fallback": "reicon:cake-filled",
	});
}

export default Component;

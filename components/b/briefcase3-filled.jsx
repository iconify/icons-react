import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/plru9gbxl.css';
import '../../css/o/o74pufqtt.css';
import '../../css/t/t8xme76ku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="plru9gbxl"/><path class="o74pufqtt"/><path class="t8xme76ku"/></g>`,
		"fallback": "reicon:briefcase3-filled",
	});
}

export default Component;

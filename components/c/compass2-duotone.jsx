import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ecu3subby.css';
import '../../css/g/gix7qm0ph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ecu3subby"/><path class="gix7qm0ph"/></g>`,
		"fallback": "reicon:compass2-duotone",
	});
}

export default Component;

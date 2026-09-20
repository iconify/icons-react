import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gsx79b0zp.css';
import '../../css/d/dy5yiabwz.css';
import '../../css/z/z0y52ppep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gsx79b0zp"/><path clip-rule="evenodd" class="dy5yiabwz"/><path clip-rule="evenodd" class="z0y52ppep"/></g>`,
		"fallback": "reicon:inbox2-filled",
	});
}

export default Component;

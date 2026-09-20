import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wqpfyoblb.css';
import '../../css/m/m0y-dcqbn.css';
import '../../css/l/lmr5zrbyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wqpfyoblb"/><path class="m0y-dcqbn"/><path class="lmr5zrbyh"/></g>`,
		"fallback": "mynaui:inbox-down",
	});
}

export default Component;

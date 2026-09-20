import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wqpfyoblb.css';
import '../../css/c/c2xexlbho.css';
import '../../css/z/z_10p8icb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wqpfyoblb"/><path class="c2xexlbho"/><path class="z_10p8icb"/></g>`,
		"fallback": "mynaui:inbox-up",
	});
}

export default Component;

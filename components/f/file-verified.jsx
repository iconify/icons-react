import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/msjhf_b2m.css';
import '../../css/v/vqsigh45m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="msjhf_b2m"/><path class="vqsigh45m"/></g>`,
		"fallback": "hugeicons:file-verified",
	});
}

export default Component;

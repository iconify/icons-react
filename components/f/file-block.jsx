import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yz8_y5bub.css';
import '../../css/t/t5gwvmtqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yz8_y5bub"/><path class="t5gwvmtqb"/></g>`,
		"fallback": "hugeicons:file-block",
	});
}

export default Component;

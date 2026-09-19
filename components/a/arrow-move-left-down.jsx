import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/aqoo24bfq.css';
import '../../css/z/z5vdgsbwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="aqoo24bfq"/><path class="z5vdgsbwm"/></g>`,
		"fallback": "hugeicons:arrow-move-left-down",
	});
}

export default Component;

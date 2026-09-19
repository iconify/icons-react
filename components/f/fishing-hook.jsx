import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/odesvlbsr.css';
import '../../css/r/rgmpls4kf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="odesvlbsr"/><path class="rgmpls4kf"/></g>`,
		"fallback": "hugeicons:fishing-hook",
	});
}

export default Component;

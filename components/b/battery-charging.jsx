import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/ux_jcbb_g.css';
import '../../css/h/h7ix5eoar.css';
import '../../css/h/hnr4r-ben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="ux_jcbb_g"/><path class="h7ix5eoar"/><path class="hnr4r-ben"/></g>`,
		"fallback": "evicons:battery-charging",
	});
}

export default Component;

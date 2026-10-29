import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cn2f9dbpj.css';
import '../../css/c/cgfl_2-qj.css';
import '../../css/u/umvgb2fhw.css';
import '../../css/x/xhowx-bcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="cn2f9dbpj"/><path class="cgfl_2-qj wm-a"/><path class="umvgb2fhw wm-s"/><path class="wm-a xhowx-bcx"/></g>`,
		"fallback": "withicons:globe-lock",
	});
}

export default Component;

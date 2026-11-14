import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/ov6bs_bay.css';
import '../../css/x/xhi8sxbwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ov6bs_bay"/><path class="xhi8sxbwy"/></g>`,
		"fallback": "evicons:charging-log",
	});
}

export default Component;

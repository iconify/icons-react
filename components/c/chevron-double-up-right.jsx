import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p_ts73zld.css';
import '../../css/k/kf_68ccoe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p_ts73zld"/><path class="kf_68ccoe"/></g>`,
		"fallback": "mynaui:chevron-double-up-right",
	});
}

export default Component;

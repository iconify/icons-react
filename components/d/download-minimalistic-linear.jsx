import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b_t_dtboj.css';
import '../../css/i/iah3itbam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b_t_dtboj"/><path class="iah3itbam"/></g>`,
		"fallback": "solar:download-minimalistic-linear",
	});
}

export default Component;

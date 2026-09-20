import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/very18blt.css';
import '../../css/w/wjltsrbuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="very18blt"/><path class="wjltsrbuw"/></g>`,
		"fallback": "mynaui:arrow-down-left-square",
	});
}

export default Component;

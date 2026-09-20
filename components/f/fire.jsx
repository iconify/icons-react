import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v1m-hacsr.css';
import '../../css/l/lipklofof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v1m-hacsr"/><path class="lipklofof"/></g>`,
		"fallback": "mynaui:fire",
	});
}

export default Component;

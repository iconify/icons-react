import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/ezc0gvbrs.css';
import '../../css/p/puj4vrx8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ezc0gvbrs"/><path class="puj4vrx8a"/></g>`,
		"fallback": "mynaui:flower-2",
	});
}

export default Component;

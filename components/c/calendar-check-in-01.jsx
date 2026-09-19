import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f0an35byo.css';
import '../../css/s/sshg5eakp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f0an35byo"/><path class="sshg5eakp"/></g>`,
		"fallback": "hugeicons:calendar-check-in-01",
	});
}

export default Component;

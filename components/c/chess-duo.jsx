import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gmj017svh.css';
import '../../css/x/xck8kdj3v.css';
import '../../css/p/p81j7dbae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gmj017svh"/><path class="wm-a xck8kdj3v"/><path class="p81j7dbae"/></g>`,
		"fallback": "withicons:chess-duo",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/p81j7dbae.css';
import '../../css/x/xck8kdj3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="p81j7dbae"/><path class="wm-a xck8kdj3v"/></g>`,
		"fallback": "withicons:chess",
	});
}

export default Component;

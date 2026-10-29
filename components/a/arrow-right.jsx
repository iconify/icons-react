import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sxlwlmkmh.css';
import '../../css/a/a7il49b7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="sxlwlmkmh"/><path class="a7il49b7h wm-a"/></g>`,
		"fallback": "withicons:arrow-right",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pfodkzbrw.css';
import '../../css/d/dg5kmnbiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="pfodkzbrw"/><path class="dg5kmnbiz wm-a"/></g>`,
		"fallback": "withicons:fireplace",
	});
}

export default Component;

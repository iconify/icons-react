import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/koh4mu49t.css';
import '../../css/h/hbi8hhkfx.css';
import '../../css/o/oqf382uiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="koh4mu49t"/><path class="hbi8hhkfx wm-a"/><path class="oqf382uiz"/></g>`,
		"fallback": "withicons:eye-duo",
	});
}

export default Component;

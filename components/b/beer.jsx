import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qwrl1299h.css';
import '../../css/h/hapjozblf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="qwrl1299h"/><path class="hapjozblf wm-a"/></g>`,
		"fallback": "withicons:beer",
	});
}

export default Component;

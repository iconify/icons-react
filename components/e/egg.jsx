import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pez66rbtr.css';
import '../../css/t/t_iyb2b1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="pez66rbtr"/><path class="t_iyb2b1h wm-a"/></g>`,
		"fallback": "withicons:egg",
	});
}

export default Component;

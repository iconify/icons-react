import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z8o7fhn4h.css';
import '../../css/p/pnrbgxb5c.css';
import '../../css/k/k6q1i4brf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="z8o7fhn4h"/><path class="pnrbgxb5c wm-a"/><path class="k6q1i4brf"/></g>`,
		"fallback": "withicons:broom-duo",
	});
}

export default Component;

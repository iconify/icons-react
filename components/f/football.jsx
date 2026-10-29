import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/o/ok8lecbuh.css';
import '../../css/q/qr9mr-bvp.css';
import '../../css/g/gu1ynac7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="yw4fz_b6b"/><path class="ok8lecbuh wm-a"/><path class="qr9mr-bvp"/><path class="gu1ynac7g wm-a"/></g>`,
		"fallback": "withicons:football",
	});
}

export default Component;

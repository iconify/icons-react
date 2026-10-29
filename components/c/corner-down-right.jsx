import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/izx2oobri.css';
import '../../css/u/u8_zcib_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="izx2oobri"/><path class="u8_zcib_q wm-a"/></g>`,
		"fallback": "withicons:corner-down-right",
	});
}

export default Component;

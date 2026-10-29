import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lhr7mp78x.css';
import '../../css/z/z5pfo_ber.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lhr7mp78x"/><path class="wm-a z5pfo_ber"/></g>`,
		"fallback": "withicons:cloud-snow",
	});
}

export default Component;

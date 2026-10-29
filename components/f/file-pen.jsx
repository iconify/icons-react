import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k1xan88pf.css';
import '../../css/z/z4bbp2bhq.css';
import '../../css/s/sava3rbel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="k1xan88pf"/><path class="wm-a z4bbp2bhq"/><path class="sava3rbel wm-s"/></g>`,
		"fallback": "withicons:file-pen",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e0-x1oc_i.css';
import '../../css/s/s6x8ycb9q.css';
import '../../css/m/m5zmhmbdg.css';
import '../../css/c/c_3gzmb-r.css';
import '../../css/t/tirf4sb9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e0-x1oc_i"/><path class="s6x8ycb9q"/><path class="m5zmhmbdg"/><path class="c_3gzmb-r"/><path class="tirf4sb9q"/></g>`,
		"fallback": "streamline-cyber-color:cat-2",
	});
}

export default Component;

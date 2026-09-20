import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pru2_q5nl.css';
import '../../css/s/sa9s0_b8i.css';
import '../../css/h/hadk8cb9r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pru2_q5nl"/><path class="sa9s0_b8i"/><path clip-rule="evenodd" class="hadk8cb9r"/></g>`,
		"fallback": "streamline-plump-color:inbox-content-flat",
	});
}

export default Component;

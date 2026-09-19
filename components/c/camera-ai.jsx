import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k_r3fq2nx.css';
import '../../css/g/gi3ejpbsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k_r3fq2nx"/><path class="gi3ejpbsk"/></g>`,
		"fallback": "hugeicons:camera-ai",
	});
}

export default Component;

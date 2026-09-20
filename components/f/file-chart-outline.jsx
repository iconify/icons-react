import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gdboc2nqx.css';
import '../../css/v/vq22hmbam.css';
import '../../css/r/rtla-_a_z.css';
import '../../css/m/m-_pys7sn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gdboc2nqx"/><path class="vq22hmbam"/><path class="rtla-_a_z"/><path clip-rule="evenodd" class="m-_pys7sn"/></g>`,
		"fallback": "solar:file-chart-outline",
	});
}

export default Component;

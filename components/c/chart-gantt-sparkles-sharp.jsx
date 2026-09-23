import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/uif_blbkw.css';
import '../../css/x/xwxdw8hle.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="uif_blbkw"/><path class="xwxdw8hle"/></g>`,
		"fallback": "keyline-icons:chart-gantt-sparkles-sharp",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/whhv1p9qk.css';
import '../../css/t/tatld5bwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="whhv1p9qk"/><path class="tatld5bwq"/></g>`,
		"fallback": "lets-icons:chart-alt-duotone-line",
	});
}

export default Component;

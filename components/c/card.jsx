import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gsc_y4b_d.css';
import '../../css/t/tk0lidbnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gsc_y4b_d"/><path class="tk0lidbnc"/></g>`,
		"fallback": "tdesign:card",
	});
}

export default Component;

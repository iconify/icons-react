import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m0g21rfgt.css';
import '../../css/l/lbmbikban.css';
import '../../css/f/fwvwu22pc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="m0g21rfgt"/><path class="lbmbikban"/><path class="fwvwu22pc"/></g>`,
		"fallback": "iconaut:arrow-down-from-line",
	});
}

export default Component;

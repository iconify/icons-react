import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/dk4_o5c1g.css';
import '../../css/t/tsngy8x8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="dk4_o5c1g"/><path class="tsngy8x8e"/></g>`,
		"fallback": "keyline-icons:bar-chart-down-sharp-two-tone",
	});
}

export default Component;

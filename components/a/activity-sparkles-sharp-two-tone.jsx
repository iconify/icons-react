import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/evxcoq2mj.css';
import '../../css/d/dmrlztban.css';
import '../../css/w/w72_i4b_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="evxcoq2mj"/><path class="dmrlztban"/><path class="w72_i4b_d"/></g>`,
		"fallback": "keyline-icons:activity-sparkles-sharp-two-tone",
	});
}

export default Component;

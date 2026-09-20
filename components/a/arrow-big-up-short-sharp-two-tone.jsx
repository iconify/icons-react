import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/dxc7t-bwu.css';
import '../../css/b/bsktolbhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="dxc7t-bwu"/><path class="bsktolbhs"/></g>`,
		"fallback": "keyline-icons:arrow-big-up-short-sharp-two-tone",
	});
}

export default Component;

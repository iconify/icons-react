import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/p4wy9ccqg.css';
import '../../css/c/cns2o9bas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="p4wy9ccqg"/><path class="cns2o9bas"/></g>`,
		"fallback": "keyline-icons:calendar-off-sharp-two-tone",
	});
}

export default Component;

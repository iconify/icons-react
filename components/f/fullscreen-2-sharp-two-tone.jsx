import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/vxugm2o-n.css';
import '../../css/s/syl-c0ccg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="vxugm2o-n"/><path class="syl-c0ccg"/></g>`,
		"fallback": "keyline-icons:fullscreen-2-sharp-two-tone",
	});
}

export default Component;

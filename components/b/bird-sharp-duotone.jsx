import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/k9nr61bta.css';
import '../../css/k/kfsr_4elq.css';
import '../../css/j/jbg64mbay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="k9nr61bta"/><path class="kfsr_4elq"/><path class="jbg64mbay"/></g>`,
		"fallback": "keyline-icons:bird-sharp-duotone",
	});
}

export default Component;

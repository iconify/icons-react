import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/ogehitbcm.css';
import '../../css/j/js2z_cc7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ogehitbcm"/><path class="js2z_cc7n"/></g>`,
		"fallback": "keyline-icons:clock-arrow-down-sharp-two-tone",
	});
}

export default Component;

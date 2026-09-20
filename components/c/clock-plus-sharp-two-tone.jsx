import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/ogehitbcm.css';
import '../../css/f/fc4xq7bpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ogehitbcm"/><path class="fc4xq7bpw"/></g>`,
		"fallback": "keyline-icons:clock-plus-sharp-two-tone",
	});
}

export default Component;

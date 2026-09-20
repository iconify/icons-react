import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/ogehitbcm.css';
import '../../css/d/d3g6r2bbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ogehitbcm"/><path class="d3g6r2bbn"/></g>`,
		"fallback": "keyline-icons:clock-arrow-left-sharp-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/ol3golbcs.css';
import '../../css/r/rjbgo_b2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ol3golbcs"/><path class="rjbgo_b2s"/></g>`,
		"fallback": "keyline-icons:git-connection-sharp-fill",
	});
}

export default Component;

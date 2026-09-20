import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/jjowgxeee.css';
import '../../css/l/lq6i4qb5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="jjowgxeee"/><path class="lq6i4qb5k"/></g>`,
		"fallback": "keyline-icons:cctv-sharp-two-tone",
	});
}

export default Component;

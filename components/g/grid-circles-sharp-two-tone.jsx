import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/u_t-2ocod.css';
import '../../css/j/jh23fpbsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="u_t-2ocod"/><path class="jh23fpbsn"/></g>`,
		"fallback": "keyline-icons:grid-circles-sharp-two-tone",
	});
}

export default Component;

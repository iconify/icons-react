import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/u0nfmxh_m.css';
import '../../css/b/b9opflstk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="u0nfmxh_m"/><path class="b9opflstk"/></g>`,
		"fallback": "keyline-icons:bracket-arrow-up-sharp-duotone",
	});
}

export default Component;

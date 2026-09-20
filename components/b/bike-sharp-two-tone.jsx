import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/t0e2nkp4h.css';
import '../../css/v/v-gqv21cb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="t0e2nkp4h"/><path class="v-gqv21cb"/></g>`,
		"fallback": "keyline-icons:bike-sharp-two-tone",
	});
}

export default Component;

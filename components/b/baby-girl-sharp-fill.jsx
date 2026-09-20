import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/mfjn8jbeg.css';
import '../../css/p/pyyyx9b3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="mfjn8jbeg"/><path class="pyyyx9b3l"/></g>`,
		"fallback": "keyline-icons:baby-girl-sharp-fill",
	});
}

export default Component;

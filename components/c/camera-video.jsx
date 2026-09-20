import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uc-a9xb9c.css';
import '../../css/u/ut1_a7brm.css';
import '../../css/t/tj1d63zoc.css';
import '../../css/e/e8s3j_o1h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uc-a9xb9c"/><path class="ut1_a7brm"/><path class="tj1d63zoc"/><path class="e8s3j_o1h"/></g>`,
		"fallback": "streamline-flex-color:camera-video",
	});
}

export default Component;

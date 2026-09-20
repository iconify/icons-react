import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/y5btkbb_w.css';
import '../../css/p/p53xcyb3q.css';
import '../../css/t/tuoen37fg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="y5btkbb_w"/><path class="p53xcyb3q"/><path class="tuoen37fg"/></g>`,
		"fallback": "keyline-icons:chart-scatter-bubble-sharp-two-tone",
	});
}

export default Component;

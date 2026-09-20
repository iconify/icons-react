import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/moyzajbqc.css';
import '../../css/s/sfz3i15tc.css';
import '../../css/w/wd7pi1brx.css';
import '../../css/v/vyz3_obde.css';
import '../../css/i/ih12mbb1v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="moyzajbqc"/><path class="sfz3i15tc"/><path class="wd7pi1brx"/><path class="vyz3_obde"/><path class="ih12mbb1v"/></g>`,
		"fallback": "streamline-color:customer-support-1",
	});
}

export default Component;

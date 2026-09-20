import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/evy6b2b8g.css';
import '../../css/h/hyqcm5vxn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="evy6b2b8g"/><path class="hyqcm5vxn"/></g>`,
		"fallback": "streamline-color:cheese-flat",
	});
}

export default Component;

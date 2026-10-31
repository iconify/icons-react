import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yqd-51b3s.css';
import '../../css/k/k9sd23bwb.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yqd-51b3s"/><path class="k9sd23bwb"/></g>`,
		"fallback": "cif:at",
	});
}

export default Component;

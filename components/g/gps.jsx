import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/os8vo7s7n.css';
import '../../css/n/nlg4hrxrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="os8vo7s7n"/><path class="nlg4hrxrm"/></g>`,
		"fallback": "tdesign:gps",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/whsvkubvx.css';
import '../../css/h/hq21qwaem.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="whsvkubvx"/><path class="hq21qwaem"/></g>`,
		"fallback": "streamline-flex-color:campfire-flat",
	});
}

export default Component;

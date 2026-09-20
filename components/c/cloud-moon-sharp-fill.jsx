import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/eh9efdkoj.css';
import '../../css/q/q-elplbnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="eh9efdkoj"/><path class="q-elplbnj"/></g>`,
		"fallback": "keyline-icons:cloud-moon-sharp-fill",
	});
}

export default Component;

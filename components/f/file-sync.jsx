import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/znyb6bi1c.css';
import '../../css/q/qg33jdfbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="znyb6bi1c"/><path clip-rule="evenodd" class="qg33jdfbv"/></g>`,
		"fallback": "proicons:file-sync",
	});
}

export default Component;

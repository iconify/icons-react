import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l1695c8ou.css';
import '../../css/f/fspi7_fae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l1695c8ou"/><path class="fspi7_fae"/></g>`,
		"fallback": "coolicons:file-check-corner-duotone-round",
	});
}

export default Component;

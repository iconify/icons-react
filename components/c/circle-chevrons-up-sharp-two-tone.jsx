import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/e9ewmybae.css';
import '../../css/l/l-1ucdbni.css';
import '../../css/o/o_8849hmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="e9ewmybae"/><path class="l-1ucdbni"/><path class="o_8849hmq"/></g>`,
		"fallback": "keyline-icons:circle-chevrons-up-sharp-two-tone",
	});
}

export default Component;

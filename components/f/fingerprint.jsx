import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/i/i8fgxnb-f.css';
import '../../css/y/y4s1wobbc.css';
import '../../css/o/obqcm0o_s.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="i8fgxnb-f"/><path class="y4s1wobbc"/><path class="obqcm0o_s"/></g>`,
		"fallback": "system-uicons:fingerprint",
	});
}

export default Component;

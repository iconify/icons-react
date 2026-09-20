import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/j5as4w8rp.css';
import '../../css/q/qnba0sb7c.css';
import '../../css/z/zvs88eytg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="j5as4w8rp"/><path class="qnba0sb7c"/><path class="zvs88eytg"/></g>`,
		"fallback": "keyline-icons:globe-off-sharp-two-tone",
	});
}

export default Component;

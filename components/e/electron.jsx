import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g-v1vzbnh.css';
import '../../css/w/wa_0u0vlg.css';
import '../../css/q/qp0a7ohls.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(1)" class="n1lsf0bnc"><ellipse class="g-v1vzbnh"/><path class="wa_0u0vlg"/><path class="qp0a7ohls"/></g>`,
		"fallback": "si-glyph:electron",
	});
}

export default Component;

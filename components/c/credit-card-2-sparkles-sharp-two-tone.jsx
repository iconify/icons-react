import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/w0d5lhbyf.css';
import '../../css/u/uecn1lb3p.css';
import '../../css/q/q3vaf6zlj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="w0d5lhbyf"/><path class="uecn1lb3p"/><path class="q3vaf6zlj"/></g>`,
		"fallback": "keyline-icons:credit-card-2-sparkles-sharp-two-tone",
	});
}

export default Component;

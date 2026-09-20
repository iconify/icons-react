import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qu41m2b0h.css';
import '../../css/z/z03zfd3hg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="qu41m2b0h"/><path class="z03zfd3hg"/></g>`,
		"fallback": "streamline:calendar-star",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q3ewr8yko.css';
import '../../css/k/kg60csbdm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="q3ewr8yko"/><path class="kg60csbdm"/></g>`,
		"fallback": "si-glyph:heart-signal",
	});
}

export default Component;

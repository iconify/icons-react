import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vupw44bws.css';
import '../../css/k/k_xnenbog.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="vupw44bws"/><path class="k_xnenbog"/></g>`,
		"fallback": "si-glyph:battery-charging",
	});
}

export default Component;

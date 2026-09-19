import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vhkfc2xes.css';
import '../../css/q/qb_przbzh.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="vhkfc2xes"/><path class="qb_przbzh"/></g>`,
		"fallback": "si-glyph:badge-name",
	});
}

export default Component;

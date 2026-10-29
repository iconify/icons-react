import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r44ynabpj.css';
import '../../css/f/fgeqsih6h.css';
import '../../css/q/q1p36ezov.css';
import '../../css/z/ztoqjhb2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r44ynabpj wm-k"/><path class="fgeqsih6h wm-k"/><path class="q1p36ezov wm-k"/><path class="wm-shine ztoqjhb2m"/></g>`,
		"fallback": "withicons-anime:bone",
	});
}

export default Component;

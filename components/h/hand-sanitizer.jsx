import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y592j3bqz.css';
import '../../css/e/e-nfirlbo.css';
import '../../css/a/a2iaob_cj.css';
import '../../css/n/n7d_jekvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="y592j3bqz"/><path class="e-nfirlbo"/><path class="a2iaob_cj"/><path class="n7d_jekvg"/></g>`,
		"fallback": "hugeicons:hand-sanitizer",
	});
}

export default Component;

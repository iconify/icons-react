import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c479rxbrg.css';
import '../../css/o/otit0l4ks.css';
import '../../css/r/rl84ppbeo.css';
import '../../css/c/c9mfofy0x.css';
import '../../css/l/ldit2f5kg.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c479rxbrg"/><circle class="otit0l4ks"/><path class="rl84ppbeo"/><path class="c9mfofy0x"/><path class="ldit2f5kg"/>`,
		"fallback": "openmoji:face-with-raised-eyebrow",
	});
}

export default Component;

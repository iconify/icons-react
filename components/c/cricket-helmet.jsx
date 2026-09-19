import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tlgdwxbba.css';
import '../../css/j/j3ousrymj.css';
import '../../css/t/t65bl0bhm.css';
import '../../css/n/nghcg_b1k.css';
import '../../css/x/x56xuz19c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="tlgdwxbba"/><path class="j3ousrymj"/><path class="t65bl0bhm"/><path class="nghcg_b1k"/><path class="x56xuz19c"/></g>`,
		"fallback": "hugeicons:cricket-helmet",
	});
}

export default Component;

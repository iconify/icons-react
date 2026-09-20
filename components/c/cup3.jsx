import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/erbtq19fd.css';
import '../../css/a/a6914tbjy.css';
import '../../css/q/q12faq_bh.css';
import '../../css/l/l2bu-r9gf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="erbtq19fd"/><path class="a6914tbjy"/><path class="q12faq_bh"/><path class="l2bu-r9gf"/></g>`,
		"fallback": "reicon:cup3",
	});
}

export default Component;

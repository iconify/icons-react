import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/eg5c0zlrg.css';
import '../../css/z/z98zelieh.css';
import '../../css/o/o0oa21b-d.css';
import '../../css/y/yvz9y3b2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="eg5c0zlrg"/><path class="z98zelieh"/><path class="o0oa21b-d"/><path class="yvz9y3b2b"/></g>`,
		"fallback": "hugeicons:game",
	});
}

export default Component;

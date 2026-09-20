import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qhr87xbvl.css';
import '../../css/x/xs1p5p0xc.css';
import '../../css/a/avmgvabrc.css';
import '../../css/u/uf50r_q1t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qhr87xbvl"/><path clip-rule="evenodd" class="xs1p5p0xc"/><path clip-rule="evenodd" class="avmgvabrc"/><path class="uf50r_q1t"/></g>`,
		"fallback": "pepicons-print:face-grinning",
	});
}

export default Component;

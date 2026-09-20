import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c3ujshblw.css';
import '../../css/n/ndsw3g6vj.css';
import '../../css/n/nlp0xzmnw.css';
import '../../css/g/g-iv8b6la.css';
import '../../css/b/b2ecdbcpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c3ujshblw"/><path class="ndsw3g6vj"/><path class="nlp0xzmnw"/><path class="g-iv8b6la"/><path class="b2ecdbcpt"/></g>`,
		"fallback": "solar:gamepad-minimalistic-bold-duotone",
	});
}

export default Component;

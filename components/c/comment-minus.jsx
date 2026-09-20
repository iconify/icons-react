import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/teodj6f_a.css';
import '../../css/r/rev5iwbfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="teodj6f_a"/><path clip-rule="evenodd" class="rev5iwbfr"/></g>`,
		"fallback": "reicon:comment-minus",
	});
}

export default Component;

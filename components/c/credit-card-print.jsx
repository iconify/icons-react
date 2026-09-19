import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g4y7acbjs.css';
import '../../css/i/iod4a0bly.css';
import '../../css/l/ldby4ccie.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g4y7acbjs"/><path clip-rule="evenodd" class="iod4a0bly"/><path clip-rule="evenodd" class="ldby4ccie"/></g>`,
		"fallback": "pepicons:credit-card-print",
	});
}

export default Component;

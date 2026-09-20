import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/am2abbb-n.css';
import '../../css/q/q7aza6f2g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="am2abbb-n"/><path class="q7aza6f2g"/></g>`,
		"fallback": "streamline-color:discount-percent-fire-flat",
	});
}

export default Component;

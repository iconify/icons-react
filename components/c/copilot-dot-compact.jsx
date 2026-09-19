import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dsq17kvgv.css';
import '../../css/l/lvzj-jbyy.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dsq17kvgv"/><path class="lvzj-jbyy"/></g>`,
		"fallback": "codicon:copilot-dot-compact",
	});
}

export default Component;

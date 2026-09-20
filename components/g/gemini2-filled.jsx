import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mb2j2qbea.css';
import '../../css/t/t9u3yzbwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mb2j2qbea"/><path class="t9u3yzbwg"/></g>`,
		"fallback": "reicon:gemini2-filled",
	});
}

export default Component;

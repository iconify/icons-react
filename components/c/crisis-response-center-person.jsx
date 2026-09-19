import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j0lhwfaio.css';
import '../../css/z/z4dp_gnyn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="j0lhwfaio"/><path class="z4dp_gnyn"/></g>`,
		"fallback": "healthicons:crisis-response-center-person",
	});
}

export default Component;

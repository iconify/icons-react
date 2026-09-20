import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/l/lr965nzbp.css';
import '../../css/h/h_j_r2bys.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="lr965nzbp"/><path class="h_j_r2bys"/></g>`,
		"fallback": "system-uicons:create",
	});
}

export default Component;

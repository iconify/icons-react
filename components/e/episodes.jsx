import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/a/a7kmjvbvt.css';
import '../../css/l/l0yw3t1ep.css';
import '../../css/e/eehirac9b.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="a7kmjvbvt"/><path class="l0yw3t1ep"/><path class="eehirac9b"/></g>`,
		"fallback": "system-uicons:episodes",
	});
}

export default Component;

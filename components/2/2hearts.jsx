import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q79rvz6zn.css';
import '../../css/r/rv25bpjtc.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q79rvz6zn"/><path class="rv25bpjtc"/>`,
		"fallback": "fxemoji:2hearts",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/f/fnlil_bkj.css';
import '../../css/y/y_q0le7li.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="fnlil_bkj"/><path class="y_q0le7li"/></g>`,
		"fallback": "icon-park:chopping-board",
	});
}

export default Component;

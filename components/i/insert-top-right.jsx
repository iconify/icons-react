import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dozv8bu4b.css';
import '../../css/j/jhu4hwrdz.css';
import '../../css/n/ntee6vcqu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dozv8bu4b"/><path class="jhu4hwrdz"/><path class="ntee6vcqu"/></g>`,
		"fallback": "streamline-color:insert-top-right",
	});
}

export default Component;

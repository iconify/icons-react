import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lf02mkbqe.css';
import '../../css/r/rom_u-0bp.css';
import '../../css/b/byszr5bmh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lf02mkbqe"/><path class="rom_u-0bp"/><path class="byszr5bmh"/></g>`,
		"fallback": "streamline-color:hearing-deaf-1",
	});
}

export default Component;

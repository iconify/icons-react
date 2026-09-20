import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/j/jty_abcpu.css';
import '../../css/b/bb77y_tlh.css';
import '../../css/w/wbw_ixbrw.css';
import '../../css/y/yad62e0rw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><circle class="jty_abcpu"/><path class="bb77y_tlh"/><path class="wbw_ixbrw"/><ellipse class="yad62e0rw"/></g>`,
		"fallback": "solar:expressionless-circle-line-duotone",
	});
}

export default Component;

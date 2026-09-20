import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j5r9_tb_l.css';
import '../../css/y/yi961nbss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="j5r9_tb_l"/><path class="yi961nbss"/></g>`,
		"fallback": "reicon:call-calling",
	});
}

export default Component;

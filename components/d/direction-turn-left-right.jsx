import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qiivxj9lp.css';
import '../../css/w/woqg2xb0b.css';
import '../../css/u/uuop1pb4g.css';
import '../../css/v/vhdrq4p5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qiivxj9lp"/><path class="woqg2xb0b"/><path class="uuop1pb4g"/><path class="vhdrq4p5a"/></g>`,
		"fallback": "andrsrxn:direction-turn-left-right",
	});
}

export default Component;

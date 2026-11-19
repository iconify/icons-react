import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qiivxj9lp.css';
import '../../css/v/vhdrq4p5a.css';
import '../../css/x/xcvy7wb_x.css';
import '../../css/z/zdor7g_9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qiivxj9lp"/><path class="vhdrq4p5a"/><path class="xcvy7wb_x"/><path class="zdor7g_9a"/></g>`,
		"fallback": "andrsrxn:direction-turn-right",
	});
}

export default Component;

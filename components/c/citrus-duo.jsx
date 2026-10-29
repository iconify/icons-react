import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/srstqryqt.css';
import '../../css/r/ro6ni4ihy.css';
import '../../css/e/eug742r3l.css';
import '../../css/h/h-xt0z5nn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="srstqryqt"/><path class="ro6ni4ihy wm-a"/><path class="eug742r3l"/><path class="h-xt0z5nn wm-a"/></g>`,
		"fallback": "withicons:citrus-duo",
	});
}

export default Component;

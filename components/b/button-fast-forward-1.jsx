import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y8wwyzbhe.css';
import '../../css/m/m15ic9-bh.css';
import '../../css/w/wsl75lqdr.css';
import '../../css/q/q40l5m1ba.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y8wwyzbhe"/><path class="m15ic9-bh"/><path class="wsl75lqdr"/><path class="q40l5m1ba"/></g>`,
		"fallback": "streamline-color:button-fast-forward-1",
	});
}

export default Component;

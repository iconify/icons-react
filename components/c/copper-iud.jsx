import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/szx8rvb1l.css';
import '../../css/h/hwkr87bzo.css';
import '../../css/p/pyif0obzd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="szx8rvb1l"/><path clip-rule="evenodd" class="hwkr87bzo"/><path class="pyif0obzd"/></g>`,
		"fallback": "healthicons:copper-iud",
	});
}

export default Component;

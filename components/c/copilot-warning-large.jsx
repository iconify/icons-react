import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xhuizzi_l.css';
import '../../css/d/djjsp__wh.css';
import '../../css/u/uoqeok1kf.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xhuizzi_l"/><path class="djjsp__wh"/><path class="uoqeok1kf"/></g>`,
		"fallback": "codicon:copilot-warning-large",
	});
}

export default Component;

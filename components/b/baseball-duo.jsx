import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dvsrflb8k.css';
import '../../css/m/mxkzlzb-o.css';
import '../../css/v/v0fihomyr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dvsrflb8k"/><path class="mxkzlzb-o"/><path class="v0fihomyr"/></g>`,
		"fallback": "streamline-kameleon-color:baseball-duo",
	});
}

export default Component;

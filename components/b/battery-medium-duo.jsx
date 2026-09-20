import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dvsrflb8k.css';
import '../../css/t/tpxherbpp.css';
import '../../css/r/ruxrrthgp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dvsrflb8k"/><path class="tpxherbpp"/><path class="ruxrrthgp"/></g>`,
		"fallback": "streamline-kameleon-color:battery-medium-duo",
	});
}

export default Component;

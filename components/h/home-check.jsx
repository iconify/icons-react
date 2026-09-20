import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/stm-dqrcc.css';
import '../../css/i/ibbmc7-sf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="stm-dqrcc"/><path clip-rule="evenodd" class="ibbmc7-sf"/></g>`,
		"fallback": "reicon:home-check",
	});
}

export default Component;

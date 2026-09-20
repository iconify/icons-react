import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ejbti8bvi.css';
import '../../css/p/pjl1cpo_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ejbti8bvi"/><path class="pjl1cpo_q"/></g>`,
		"fallback": "reicon:gamepad3-duotone",
	});
}

export default Component;

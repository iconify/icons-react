import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x3k-zm7mc.css';
import '../../css/k/kg9gciblh.css';
import '../../css/r/rgjqzacvp.css';
import '../../css/q/que8_rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="x3k-zm7mc"/><path class="kg9gciblh"/><circle class="rgjqzacvp"/><path class="que8_rbvv"/></g>`,
		"fallback": "iconaut:id-badge",
	});
}

export default Component;

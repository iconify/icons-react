import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qb1viybxl.css';
import '../../css/c/c768_cc3f.css';
import '../../css/s/srg_q5b8e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qb1viybxl"/><path class="c768_cc3f"/><path class="srg_q5b8e"/></g>`,
		"fallback": "streamline-kameleon-color:eyeglasses-duo",
	});
}

export default Component;

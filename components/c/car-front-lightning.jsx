import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v4n02mblg.css';
import '../../css/b/b-qo9bbvs.css';
import '../../css/f/fd_utlbfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v4n02mblg"/><path class="b-qo9bbvs"/><path class="fd_utlbfx"/></g>`,
		"fallback": "andrsrxn:car-front-lightning",
	});
}

export default Component;

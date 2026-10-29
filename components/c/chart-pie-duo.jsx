import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tdtvpgh7u.css';
import '../../css/a/afw6fsbkl.css';
import '../../css/g/gcc_iacbm.css';
import '../../css/d/d7j47q-dh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="tdtvpgh7u"/><path class="afw6fsbkl wm-a"/><path class="gcc_iacbm wm-a"/><path class="d7j47q-dh"/></g>`,
		"fallback": "withicons:chart-pie-duo",
	});
}

export default Component;

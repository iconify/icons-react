import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wc_hv_34n.css';
import '../../css/n/n9-b4x4dp.css';
import '../../css/e/emma5uf1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wc_hv_34n"/><path class="n9-b4x4dp"/><path class="emma5uf1l wm-a"/></g>`,
		"fallback": "withicons:baby",
	});
}

export default Component;

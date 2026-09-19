import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/r9duqtb3q.css';
import '../../css/v/vvujsob2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="r9duqtb3q"/><path class="vvujsob2r"/></g>`,
		"fallback": "hugeicons:bread-04",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s_fs-xhpw.css';
import '../../css/b/bvod5yb-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="s_fs-xhpw"/><path class="bvod5yb-t"/></g>`,
		"fallback": "feather:copy",
	});
}

export default Component;

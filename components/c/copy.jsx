import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bvod5yb-t.css';
import '../../css/t/t7j8-4uum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bvod5yb-t"/><rect class="t7j8-4uum"/></g>`,
		"fallback": "meteor-icons:copy",
	});
}

export default Component;

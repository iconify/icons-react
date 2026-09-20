import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o1ys_x8cu.css';
import '../../css/v/v7dn-5b5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o1ys_x8cu"/><path class="v7dn-5b5w"/></g>`,
		"fallback": "tdesign:contribute",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/q/q0m24db3d.css';
import '../../css/p/p3md5j9el.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="q0m24db3d"/><path class="p3md5j9el"/></g>`,
		"fallback": "akar-icons:align-to-middle",
	});
}

export default Component;

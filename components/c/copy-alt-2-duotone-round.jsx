import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yldtvhb8i.css';
import '../../css/t/tvv3c_bvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yldtvhb8i"/><path class="tvv3c_bvm"/></g>`,
		"fallback": "coolicons:copy-alt-2-duotone-round",
	});
}

export default Component;

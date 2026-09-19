import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a08f-m0bj.css';
import '../../css/t/t2xeigbcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a08f-m0bj"/><path class="t2xeigbcd"/></g>`,
		"fallback": "iconamoon:heart-duotone",
	});
}

export default Component;

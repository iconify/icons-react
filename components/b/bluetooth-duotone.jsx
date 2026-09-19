import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s_7_ioewn.css';
import '../../css/d/d4jsc9ebd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s_7_ioewn"/><path class="d4jsc9ebd"/></g>`,
		"fallback": "iconamoon:bluetooth-duotone",
	});
}

export default Component;

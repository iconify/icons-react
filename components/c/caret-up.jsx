import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v5dgs0bnw.css';
import '../../css/p/pd9uw65nz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v5dgs0bnw"/><path class="pd9uw65nz"/></g>`,
		"fallback": "tdesign:caret-up",
	});
}

export default Component;

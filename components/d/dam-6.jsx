import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x2fs-hbnn.css';
import '../../css/p/pkdq5fzgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x2fs-hbnn"/><path class="pkdq5fzgt"/></g>`,
		"fallback": "tdesign:dam-6",
	});
}

export default Component;

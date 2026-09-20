import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bhbh9x3rv.css';
import '../../css/e/esxfqc_pu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bhbh9x3rv"/><path class="esxfqc_pu"/></g>`,
		"fallback": "tdesign:call-forwarded",
	});
}

export default Component;

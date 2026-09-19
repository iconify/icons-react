import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/llper-sbd.css';
import '../../css/s/s1756d84r.css';
import '../../css/e/efdecu-kr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="llper-sbd"/><path class="s1756d84r"/><path class="efdecu-kr"/></g>`,
		"fallback": "iconamoon:history-duotone",
	});
}

export default Component;

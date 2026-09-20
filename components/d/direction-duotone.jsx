import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zac-83byz.css';
import '../../css/q/q7zxdcbwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zac-83byz"/><path class="q7zxdcbwt"/></g>`,
		"fallback": "si:direction-duotone",
	});
}

export default Component;

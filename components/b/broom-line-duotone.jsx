import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j6cjvt0fe.css';
import '../../css/v/v_g5znc-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j6cjvt0fe"/><path class="v_g5znc-a"/></g>`,
		"fallback": "solar:broom-line-duotone",
	});
}

export default Component;

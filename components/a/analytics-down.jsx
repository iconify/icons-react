import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gu0boielt.css';
import '../../css/r/roqcz1pae.css';
import '../../css/u/uztmj3dza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="gu0boielt"/><path class="roqcz1pae"/><path class="uztmj3dza"/></g>`,
		"fallback": "hugeicons:analytics-down",
	});
}

export default Component;

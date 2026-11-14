import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j_u3vybip.css';
import '../../css/l/lj7ufqojk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="j_u3vybip"/><path class="lj7ufqojk"/></g>`,
		"fallback": "hugeicons:call-incoming-04",
	});
}

export default Component;

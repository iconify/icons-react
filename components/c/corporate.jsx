import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/aljy8pzsg.css';
import '../../css/k/kyz9drbys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="aljy8pzsg"/><path class="kyz9drbys"/></g>`,
		"fallback": "hugeicons:corporate",
	});
}

export default Component;

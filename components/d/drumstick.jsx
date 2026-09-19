import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j4vod4mvj.css';
import '../../css/x/x83o3-c1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="j4vod4mvj"/><path clip-rule="evenodd" class="x83o3-c1l"/></g>`,
		"fallback": "hugeicons:drumstick",
	});
}

export default Component;

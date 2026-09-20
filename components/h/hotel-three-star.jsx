import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/p4paf0ioh.css';
import '../../css/a/aaow5-3kc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="p4paf0ioh"/><path class="aaow5-3kc"/></g>`,
		"fallback": "streamline-sharp:hotel-three-star",
	});
}

export default Component;

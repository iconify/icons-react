import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/s79qgjdvm.css';
import '../../css/p/p49qakbea.css';
import '../../css/l/lifkejbvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="s79qgjdvm"/><path class="p49qakbea"/><path class="lifkejbvr"/></g>`,
		"fallback": "hugeicons:briefcase-dollar",
	});
}

export default Component;

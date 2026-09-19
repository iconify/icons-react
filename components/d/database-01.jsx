import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/ge1-1_s5m.css';
import '../../css/z/z9bb_p1jb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ge1-1_s5m"/><path class="z9bb_p1jb"/></g>`,
		"fallback": "hugeicons:database-01",
	});
}

export default Component;

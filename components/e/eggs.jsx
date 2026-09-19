import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nhokilboh.css';
import '../../css/i/igvlxwg5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="nhokilboh"/><path class="igvlxwg5q"/></g>`,
		"fallback": "hugeicons:eggs",
	});
}

export default Component;

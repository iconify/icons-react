import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p83svtbdn.css';
import '../../css/d/dvp7k9baw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="p83svtbdn wm-k"/><path class="dvp7k9baw wm-s"/></g>`,
		"fallback": "withicons:bell-minus-gloss",
	});
}

export default Component;

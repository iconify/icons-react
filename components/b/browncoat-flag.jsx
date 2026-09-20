import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aq80l8t6g.css';
import '../../css/i/i1418haol.css';
import '../../css/b/bc5-xubfs.css';
import '../../css/p/p-j1o_b2k.css';
import '../../css/a/a6l50ebrv.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aq80l8t6g"/><path class="i1418haol"/><g class="bc5-xubfs"><path class="p-j1o_b2k"/><path class="a6l50ebrv"/></g>`,
		"fallback": "openmoji:browncoat-flag",
	});
}

export default Component;

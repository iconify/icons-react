import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/p16a97b5q.css';
import '../../css/c/c-rpqrb2u.css';
import '../../css/i/ii6dtkbwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="p16a97b5q wm-k"/><path class="c-rpqrb2u wm-shadow"/><path class="ii6dtkbwz wm-k"/></g>`,
		"fallback": "withicons:git-merge-engrave",
	});
}

export default Component;

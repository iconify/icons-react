import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yqikedbdt.css';
import '../../css/z/zntvhn8qg.css';
import '../../css/p/pk03-9beu.css';
import '../../css/c/ctjcreb2q.css';
import '../../css/l/levrdiinv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k yqikedbdt"/><path class="wm-a zntvhn8qg"/><path class="pk03-9beu wm-shadow"/><path class="ctjcreb2q wm-k"/><path class="levrdiinv wm-a"/></g>`,
		"fallback": "withicons:book-open-text-engrave",
	});
}

export default Component;

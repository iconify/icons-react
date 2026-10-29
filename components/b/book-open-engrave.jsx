import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/a3tfw3zfh.css';
import '../../css/z/zntvhn8qg.css';
import '../../css/p/pk03-9beu.css';
import '../../css/c/ctjcreb2q.css';
import '../../css/j/janj24-ql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="a3tfw3zfh wm-k"/><path class="wm-a zntvhn8qg"/><path class="pk03-9beu wm-shadow"/><path class="ctjcreb2q wm-k"/><path class="janj24-ql wm-a"/></g>`,
		"fallback": "withicons:book-open-engrave",
	});
}

export default Component;

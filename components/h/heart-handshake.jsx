import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/lvnu-lb5o.css';
import '../../css/b/bfjpyhaia.css';
import '../../css/x/x4m9qttma.css';
import '../../css/i/ikpeibcxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="lvnu-lb5o wm-shadow"/><path class="bfjpyhaia wm-shadow"/><path class="x4m9qttma"/><path class="ikpeibcxb"/></g>`,
		"fallback": "withicons-brutal:heart-handshake",
	});
}

export default Component;

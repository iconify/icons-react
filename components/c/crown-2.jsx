import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hzct7m1-u.css';
import '../../css/t/tam4kbb8n.css';
import '../../css/j/jwdsr96ax.css';
import '../../css/v/v3tf7wbjy.css';
import '../../css/n/nxa--qvcq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hzct7m1-u"/><path class="tam4kbb8n"/><path clip-rule="evenodd" class="jwdsr96ax"/><path class="v3tf7wbjy"/><path class="nxa--qvcq"/></g>`,
		"fallback": "glyphs-poly:crown-2",
	});
}

export default Component;

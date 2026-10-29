import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hhllkrd_f.css';
import '../../css/j/jn3admwwv.css';
import '../../css/e/ex1wvfboz.css';
import '../../css/f/fed5n4npn.css';
import '../../css/v/vslz5yb3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hhllkrd_f wm-k"/><path class="jn3admwwv wm-a"/><path class="ex1wvfboz wm-shadow"/><path class="fed5n4npn wm-k"/><path class="vslz5yb3q wm-a"/></g>`,
		"fallback": "withicons:heading-engrave",
	});
}

export default Component;

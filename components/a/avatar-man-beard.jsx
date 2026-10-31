import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/oskyig9cv.css';
import '../../css/y/y2694knjk.css';
import '../../css/v/voy9v4bwh.css';
import '../../css/c/cjkx7wphc.css';
import '../../css/y/y53vev6ui.css';
import '../../css/i/i7vnqbc2b.css';
import '../../css/s/s7hum9b6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="oskyig9cv wm-shadow"/><path class="y2694knjk"/><path class="voy9v4bwh"/><path class="cjkx7wphc"/><path class="y53vev6ui"/><path class="i7vnqbc2b"/><path class="s7hum9b6t"/></g>`,
		"fallback": "withicons-brutal:avatar-man-beard",
	});
}

export default Component;

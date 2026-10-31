import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/l/lesz0xbvo.css';
import '../../css/z/za2k2ubef.css';
import '../../css/i/i9cg2rj9b.css';
import '../../css/y/ykqnlnbbe.css';
import '../../css/a/a_eltob-q.css';
import '../../css/h/hnda3fbzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="lesz0xbvo"/><path class="wm-shine za2k2ubef"/><path class="i9cg2rj9b wm-k"/><path class="wm-a ykqnlnbbe"/><path class="a_eltob-q wm-s"/><path class="hnda3fbzn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:calendar-search",
	});
}

export default Component;

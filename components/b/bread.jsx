import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vlr3v6b7l.css';
import '../../css/r/rm-jgyn5b.css';
import '../../css/b/bf9t7sa0t.css';
import '../../css/w/ws23_ww2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="vlr3v6b7l wm-shadow"/><path class="rm-jgyn5b"/><path class="bf9t7sa0t"/><path class="ws23_ww2u"/></g>`,
		"fallback": "withicons-retro:bread",
	});
}

export default Component;

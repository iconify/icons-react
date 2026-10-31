import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bcr238b2g.css';
import '../../css/w/wralrjbwo.css';
import '../../css/j/jqut9wbth.css';
import '../../css/k/kycu3_36i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="bcr238b2g wm-shadow"/><path class="wralrjbwo"/><path class="jqut9wbth"/><path class="kycu3_36i"/></g>`,
		"fallback": "withicons-retro:burger",
	});
}

export default Component;

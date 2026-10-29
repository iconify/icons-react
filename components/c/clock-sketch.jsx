import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lejs0z4jr.css';
import '../../css/w/wv49vd4-b.css';
import '../../css/g/g4j9ehvsu.css';
import '../../css/q/q3ug9bckq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="lejs0z4jr"/><path class="wm-a wv49vd4-b"/><path class="g4j9ehvsu wm-k"/><path class="q3ug9bckq wm-a"/></g>`,
		"fallback": "withicons:clock-sketch",
	});
}

export default Component;

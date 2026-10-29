import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/af1frba3j.css';
import '../../css/w/wir0vbbwl.css';
import '../../css/t/tqv20l_mm.css';
import '../../css/f/f72lw2b8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="af1frba3j wm-k"/><path class="wir0vbbwl wm-a"/><path class="tqv20l_mm wm-k"/><path class="f72lw2b8q wm-a"/></g>`,
		"fallback": "withicons:corner-down-left-sketch",
	});
}

export default Component;

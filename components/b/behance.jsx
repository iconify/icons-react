import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/q8w2p-sat.css';
import '../../css/r/rr3x7ccdt.css';
import '../../css/j/jhvhmudid.css';
import '../../css/e/eie2tfbmr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path clip-rule="evenodd" class="q8w2p-sat"/><path clip-rule="evenodd" class="rr3x7ccdt"/><path class="jhvhmudid"/><path class="eie2tfbmr"/></g>`,
		"fallback": "icon-park:behance",
	});
}

export default Component;

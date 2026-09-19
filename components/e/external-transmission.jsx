import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/rlyb_beyp.css';
import '../../css/n/nqszg3bby.css';
import '../../css/r/rrulitb_l.css';
import '../../css/l/ljoi5lzeg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="rlyb_beyp"/><path class="nqszg3bby"/><path class="rrulitb_l"/><path class="ljoi5lzeg"/></g>`,
		"fallback": "icon-park:external-transmission",
	});
}

export default Component;

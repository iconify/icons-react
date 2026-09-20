import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lnvrwachm.css';
import '../../css/x/xva1mxy4q.css';
import '../../css/p/ptipnnblw.css';
import '../../css/i/i6qzlp6eu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lnvrwachm"/><path class="xva1mxy4q"/><path class="ptipnnblw"/><path class="i6qzlp6eu"/></g>`,
		"fallback": "streamline-cyber-color:bank-note-2",
	});
}

export default Component;

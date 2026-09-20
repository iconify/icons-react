import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pnlw9tbfh.css';
import '../../css/r/rdg5s2amp.css';
import '../../css/w/wkck6fb3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pnlw9tbfh"/><path class="rdg5s2amp"/><path class="wkck6fb3i"/></g>`,
		"fallback": "stash:file-import",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pilynhqlu.css';
import '../../css/d/dnbmdfbyc.css';
import '../../css/w/wb2svn6kf.css';
import '../../css/b/btbva7g4m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pilynhqlu"/><path class="dnbmdfbyc"/><path class="wb2svn6kf"/><path class="btbva7g4m"/></g>`,
		"fallback": "streamline-color:cards",
	});
}

export default Component;

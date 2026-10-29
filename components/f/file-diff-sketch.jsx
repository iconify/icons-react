import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/d8ghwdbfk.css';
import '../../css/c/crsjgi0ys.css';
import '../../css/o/obwxlfoek.css';
import '../../css/p/p2hre-57p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="d8ghwdbfk"/><path class="crsjgi0ys wm-a"/><path class="obwxlfoek wm-k"/><path class="p2hre-57p wm-a"/></g>`,
		"fallback": "withicons:file-diff-sketch",
	});
}

export default Component;

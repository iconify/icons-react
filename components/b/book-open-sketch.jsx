import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/ntluoabif.css';
import '../../css/l/l4rtpqumh.css';
import '../../css/u/u5184whll.css';
import '../../css/y/y6sbpzbuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ntluoabif"/><path class="l4rtpqumh wm-k"/><path class="u5184whll wm-k"/><path class="wm-a y6sbpzbuu"/></g>`,
		"fallback": "withicons:book-open-sketch",
	});
}

export default Component;

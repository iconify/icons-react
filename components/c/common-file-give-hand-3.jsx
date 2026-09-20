import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nilssybsr.css';
import '../../css/k/kvj_6ra8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="nilssybsr"/><path class="kvj_6ra8i"/></g>`,
		"fallback": "streamline-ultimate:common-file-give-hand-3",
	});
}

export default Component;

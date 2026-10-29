import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/q6bh5bczb.css';
import '../../css/e/egfbtabll.css';
import '../../css/v/vzlygkbrz.css';
import '../../css/o/ovlo2xbrs.css';
import '../../css/t/thhyn7bwu.css';
import '../../css/n/nek6nub6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="q6bh5bczb wm-k"/><path class="egfbtabll wm-a"/><path class="vzlygkbrz wm-k"/><path class="ovlo2xbrs"/><path class="thhyn7bwu"/><path class="nek6nub6v wm-s"/></g>`,
		"fallback": "withicons-bauhaus:avatar-alien",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v93_pmbkz.css';
import '../../css/m/mij3o65_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="v93_pmbkz wm-k"/><path class="mij3o65_j wm-a"/></g>`,
		"fallback": "withicons:hand-heart-gloss",
	});
}

export default Component;

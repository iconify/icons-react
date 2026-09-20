import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/p/pl54t6b_g.css';
import '../../css/v/vm4-w_bgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="pl54t6b_g"/><rect class="vm4-w_bgz"/></g>`,
		"fallback": "lets-icons:copy",
	});
}

export default Component;

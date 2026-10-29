import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/ytt-abbya.css';
import '../../css/f/fj_c3hbrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ytt-abbya"/><path class="fj_c3hbrr"/></g>`,
		"fallback": "withicons:git-merge-sketch",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/j5vqqdekm.css';
import '../../css/k/korjmdb3g.css';
import '../../css/q/q4yq6n5ay.css';
import '../../css/n/ntngoll_a.css';
import '../../css/l/lf2nuccea.css';
import '../../css/l/lyxf42idp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="j5vqqdekm wm-shadow"/><path class="korjmdb3g"/><path class="q4yq6n5ay"/><path class="ntngoll_a"/><path class="lf2nuccea"/><path class="lyxf42idp"/></g>`,
		"fallback": "withicons-retro:filter",
	});
}

export default Component;

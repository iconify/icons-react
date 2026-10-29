import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cwfqxbbmp.css';
import '../../css/y/ydi4l6wia.css';
import '../../css/y/y79632q_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="cwfqxbbmp"/><path class="wm-k ydi4l6wia"/><path class="wm-a y79632q_u"/></g>`,
		"fallback": "withicons:git-pull-request-draft-sketch",
	});
}

export default Component;

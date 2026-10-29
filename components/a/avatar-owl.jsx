import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/d90otmb1f.css';
import '../../css/u/ui04q6rnr.css';
import '../../css/l/leq7fbcnh.css';
import '../../css/v/vpw-7-z9w.css';
import '../../css/p/p23oue1nf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="d90otmb1f wm-k"/><path class="ui04q6rnr wm-a"/><path class="leq7fbcnh wm-k"/><path class="vpw-7-z9w"/><path class="p23oue1nf"/></g>`,
		"fallback": "withicons-bauhaus:avatar-owl",
	});
}

export default Component;

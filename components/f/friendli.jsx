import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctl_ykb8l.css';
import '../../css/b/bru927b7a.css';
import '../../css/t/tibham96p.css';
import '../../css/n/nvyrcxbrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ctl_ykb8l"><path class="bru927b7a"/><path class="tibham96p"/><path class="nvyrcxbrk"/></g>`,
		"fallback": "thesvg-color:friendli",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/q_m2_qbub.css';
import '../../css/f/fzf0h0g8v.css';
import '../../css/z/zvjpqvbuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="q_m2_qbub"/><path class="fzf0h0g8v"/><path class="zvjpqvbuu"/></g>`,
		"fallback": "withicons-bauhaus:container",
	});
}

export default Component;

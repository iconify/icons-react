import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fo69s-bvj.css';
import '../../css/t/ttiqxpb9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="fo69s-bvj"/><path class="ttiqxpb9a wm-s"/></g>`,
		"fallback": "withicons:git-pull-request-closed-solid",
	});
}

export default Component;

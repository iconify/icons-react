import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zz9sjnbyh.css';
import '../../css/y/yqvxwkfqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-k zz9sjnbyh"/><path class="wm-s yqvxwkfqk"/></g>`,
		"fallback": "withicons-bauhaus:git-branch-plus",
	});
}

export default Component;

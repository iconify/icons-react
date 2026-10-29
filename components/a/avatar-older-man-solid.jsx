import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o_xt3c5au.css';
import '../../css/w/w3ze4nbeo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="o_xt3c5au"/><path class="w3ze4nbeo wm-a"/></g>`,
		"fallback": "withicons:avatar-older-man-solid",
	});
}

export default Component;

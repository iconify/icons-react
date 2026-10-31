import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nj741ob1l.css';
import '../../css/a/aa2_prtxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="nj741ob1l wm-k"/><path class="aa2_prtxg wm-s"/></g>`,
		"fallback": "withicons:git-branch-plus-gloss",
	});
}

export default Component;

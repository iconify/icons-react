import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vsxr0cbrw.css';
import '../../css/r/rxzdcmbsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="vsxr0cbrw wm-k"/><path class="rxzdcmbsz wm-a"/></g>`,
		"fallback": "withicons:arrow-left-to-line-gloss",
	});
}

export default Component;

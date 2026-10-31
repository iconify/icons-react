import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/ml-1ndbxu.css';
import '../../css/e/e4hnjjb-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ml-1ndbxu wm-k"/><path class="e4hnjjb-x wm-a"/></g>`,
		"fallback": "withicons:git-pull-request-draft-gloss",
	});
}

export default Component;

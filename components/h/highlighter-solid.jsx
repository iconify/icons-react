import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bbnfnj0ux.css';
import '../../css/n/n5me44bvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="bbnfnj0ux"/><path class="n5me44bvc wm-a"/></g>`,
		"fallback": "withicons:highlighter-solid",
	});
}

export default Component;

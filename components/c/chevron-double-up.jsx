import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xx8qpdbff.css';
import '../../css/w/wito0yrpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xx8qpdbff"/><path class="wito0yrpk"/></g>`,
		"fallback": "stash:chevron-double-up",
	});
}

export default Component;

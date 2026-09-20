import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jhr110b0o.css';
import '../../css/w/w7tdew8xc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jhr110b0o"/><path class="w7tdew8xc"/></g>`,
		"fallback": "stash:chevron-double-up-solid",
	});
}

export default Component;

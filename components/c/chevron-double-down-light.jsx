import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rug0ggb6g.css';
import '../../css/x/x0a7qwb1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rug0ggb6g"/><path class="x0a7qwb1v"/></g>`,
		"fallback": "stash:chevron-double-down-light",
	});
}

export default Component;

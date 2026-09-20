import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mqxyc7c-q.css';
import '../../css/y/yx_iz0bby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mqxyc7c-q"/><path class="yx_iz0bby"/></g>`,
		"fallback": "stash:chevron-double-right",
	});
}

export default Component;

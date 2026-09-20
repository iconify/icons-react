import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/abdbwgb_h.css';
import '../../css/e/eb3ac9b0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="abdbwgb_h"/><path class="eb3ac9b0s"/></g>`,
		"fallback": "stash:chevron-double-down-solid",
	});
}

export default Component;

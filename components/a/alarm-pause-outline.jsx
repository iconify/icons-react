import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e4a6uu4hi.css';
import '../../css/l/lusnq6q-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="e4a6uu4hi"/><path class="lusnq6q-o"/></g>`,
		"fallback": "solar:alarm-pause-outline",
	});
}

export default Component;

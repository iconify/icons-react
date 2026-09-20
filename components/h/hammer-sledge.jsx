import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bmo1d6w1d.css';
import '../../css/b/baf6ccb0s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="bmo1d6w1d"/><path class="baf6ccb0s"/></g>`,
		"fallback": "pepicons-pencil:hammer-sledge",
	});
}

export default Component;

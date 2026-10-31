import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qi9zeu02k.css';
import '../../css/m/m3nqpup-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="qi9zeu02k wm-k"/><path class="m3nqpup-o wm-a"/></g>`,
		"fallback": "withicons:fireplace-gloss",
	});
}

export default Component;

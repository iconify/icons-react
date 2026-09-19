import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/oziqptg9c.css';
import '../../css/i/i45j36p9r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="oziqptg9c"/><path class="i45j36p9r"/></g>`,
		"fallback": "cryptocurrency:hpb",
	});
}

export default Component;

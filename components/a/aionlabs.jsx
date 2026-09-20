import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u8auz9i1r.css';
import '../../css/r/r7imq1lay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="u8auz9i1r"/><path class="r7imq1lay"/></g>`,
		"fallback": "thesvg:aionlabs",
	});
}

export default Component;

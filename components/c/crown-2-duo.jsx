import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nwpxa05bi.css';
import '../../css/w/wqkaihb1k.css';
import '../../css/u/umazo3bdr.css';
import '../../css/b/bby-jcaxr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nwpxa05bi"/><path class="wqkaihb1k"/><path class="umazo3bdr"/><path class="bby-jcaxr"/></g>`,
		"fallback": "glyphs:crown-2-duo",
	});
}

export default Component;

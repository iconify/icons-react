import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lx90d9eva.css';
import '../../css/z/zbraxxbpk.css';
import '../../css/f/f4zg2ubjr.css';
import '../../css/j/jf6tf2zuk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lx90d9eva"/><path class="zbraxxbpk"/><path class="f4zg2ubjr"/><path class="jf6tf2zuk"/></g>`,
		"fallback": "andrsrxn:file-medal",
	});
}

export default Component;

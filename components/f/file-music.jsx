import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xm7rr7a9x.css';
import '../../css/r/risfjtb6e.css';
import '../../css/z/zdvwoab3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xm7rr7a9x"/><path class="risfjtb6e"/><path class="zdvwoab3j"/></g>`,
		"fallback": "andrsrxn:file-music",
	});
}

export default Component;

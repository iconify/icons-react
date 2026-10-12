import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/crsplxbrf.css';
import '../../css/t/txt6vub3z.css';
import '../../css/i/iz8h-wb5s.css';
import '../../css/s/sos1yebgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="crsplxbrf"/><path class="txt6vub3z"/><path class="iz8h-wb5s"/><path class="sos1yebgd"/></g>`,
		"fallback": "andrsrxn:file-question",
	});
}

export default Component;

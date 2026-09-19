import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mdrrxqbio.css';
import '../../css/p/po0uuiouq.css';
import '../../css/a/a_nlxibcr.css';
import '../../css/r/rd_-cebxb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mdrrxqbio"/><path clip-rule="evenodd" class="po0uuiouq"/><path class="a_nlxibcr"/><path class="rd_-cebxb"/></g>`,
		"fallback": "glyphs:day-outline",
	});
}

export default Component;

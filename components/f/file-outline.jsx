import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b42yr2bgc.css';
import '../../css/n/nqg2x2bxn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="b42yr2bgc"/><path class="nqg2x2bxn"/></g>`,
		"fallback": "glyphs:file-outline",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tbv_bibif.css';
import '../../css/k/kr8qribvv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tbv_bibif"/><path class="kr8qribvv"/></g>`,
		"fallback": "glyphs-poly:check-double",
	});
}

export default Component;

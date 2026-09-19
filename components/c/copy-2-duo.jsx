import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u4-kcfbnx.css';
import '../../css/o/o-uvx-bbx.css';
import '../../css/i/ihh_jhb-n.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u4-kcfbnx"/><path class="o-uvx-bbx"/><path class="ihh_jhb-n"/></g>`,
		"fallback": "glyphs:copy-2-duo",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tbfy26nss.css';
import '../../css/t/trec43gzc.css';
import '../../css/x/xc-4gu4gl.css';
import '../../css/f/fy51l8b-l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tbfy26nss"/><path clip-rule="evenodd" class="trec43gzc"/><path clip-rule="evenodd" class="xc-4gu4gl"/><path class="fy51l8b-l"/></g>`,
		"fallback": "glyphs-poly:envelope-open-note",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r8xajdb2x.css';
import '../../css/u/u5sun390o.css';
import '../../css/a/aqg1apivn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r8xajdb2x"/><path class="u5sun390o"/><path class="aqg1apivn"/></g>`,
		"fallback": "glyphs:file-duo",
	});
}

export default Component;

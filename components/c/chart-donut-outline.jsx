import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zm_kglbif.css';
import '../../css/j/jr2nnnsme.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zm_kglbif"/><path class="jr2nnnsme"/></g>`,
		"fallback": "glyphs:chart-donut-outline",
	});
}

export default Component;

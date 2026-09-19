import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lvpwo2bni.css';
import '../../css/s/su8_fik6z.css';
import '../../css/h/hyiuv2blx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lvpwo2bni"/><path class="su8_fik6z"/><path class="hyiuv2blx"/></g>`,
		"fallback": "glyphs-poly:crown-1",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ruzvt778r.css';
import '../../css/z/zobunf4_t.css';
import '../../css/k/kd29-79yc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ruzvt778r"/><path clip-rule="evenodd" class="zobunf4_t"/><path class="kd29-79yc"/></g>`,
		"fallback": "glyphs:cog-1-outline",
	});
}

export default Component;

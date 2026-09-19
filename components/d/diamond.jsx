import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aadikdb7w.css';
import '../../css/s/si82f-p2s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aadikdb7w"/><path class="si82f-p2s"/></g>`,
		"fallback": "glyphs-poly:diamond",
	});
}

export default Component;

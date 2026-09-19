import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d5093jjpo.css';
import '../../css/z/znf5zxa8n.css';
import '../../css/v/vawaipb_y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="d5093jjpo"/><path class="znf5zxa8n"/><path class="vawaipb_y"/></g>`,
		"fallback": "glyphs-poly:accessible",
	});
}

export default Component;

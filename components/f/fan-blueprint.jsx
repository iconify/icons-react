import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/x7wu1fbdv.css';
import '../../css/f/fnsq8wbds.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/l/lrbbx9b6x.css';
import '../../css/j/je2qscbwo.css';
import '../../css/d/da8zwfb5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco x7wu1fbdv"/><path class="fnsq8wbds wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="lrbbx9b6x wm-k"/><path class="je2qscbwo wm-a"/><path class="da8zwfb5x wm-k"/></g>`,
		"fallback": "withicons:fan-blueprint",
	});
}

export default Component;

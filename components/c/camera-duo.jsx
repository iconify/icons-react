import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h18guyucc.css';
import '../../css/t/t2eh-yxwi.css';
import '../../css/g/gfgxpybux.css';
import '../../css/h/h-sspho8c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h18guyucc"/><path class="t2eh-yxwi"/><path class="gfgxpybux"/><path class="h-sspho8c"/></g>`,
		"fallback": "glyphs:camera-duo",
	});
}

export default Component;

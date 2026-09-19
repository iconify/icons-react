import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aoj8g63fx.css';
import '../../css/w/wdoepxb9o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aoj8g63fx"/><path clip-rule="evenodd" class="wdoepxb9o"/></g>`,
		"fallback": "glyphs-poly:globe-east",
	});
}

export default Component;

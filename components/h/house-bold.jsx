import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vx92c-bsp.css';
import '../../css/z/z6hdjobbr.css';
import '../../css/g/ghfvu9bvy.css';
import '../../css/i/ic6_0vbog.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vx92c-bsp"/><path class="z6hdjobbr"/><path clip-rule="evenodd" class="ghfvu9bvy"/><path class="ic6_0vbog"/></g>`,
		"fallback": "glyphs:house-bold",
	});
}

export default Component;

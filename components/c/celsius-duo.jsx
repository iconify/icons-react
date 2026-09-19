import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y5ponpiuo.css';
import '../../css/h/ht0zhsbnc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y5ponpiuo"/><path class="ht0zhsbnc"/></g>`,
		"fallback": "glyphs:celsius-duo",
	});
}

export default Component;

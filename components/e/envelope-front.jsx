import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oco214bjy.css';
import '../../css/z/zn9e1jbzm.css';
import '../../css/e/esmk_ibwa.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="oco214bjy"/><path class="zn9e1jbzm"/><path class="esmk_ibwa"/></g>`,
		"fallback": "glyphs-poly:envelope-front",
	});
}

export default Component;

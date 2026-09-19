import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oco214bjy.css';
import '../../css/f/f44f10zgp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="oco214bjy"/><path clip-rule="evenodd" class="f44f10zgp"/></g>`,
		"fallback": "glyphs-poly:envelope",
	});
}

export default Component;

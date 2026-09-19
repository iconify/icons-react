import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ifwsq8zwd.css';
import '../../css/l/lcft5ybtg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="ifwsq8zwd"/><path clip-rule="evenodd" class="lcft5ybtg"/></g>`,
		"fallback": "glyphs-poly:battery-car",
	});
}

export default Component;

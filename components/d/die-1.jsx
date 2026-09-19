import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h14emmvzq.css';
import '../../css/h/hgh6cwwcv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="h14emmvzq"/><rect class="hgh6cwwcv"/></g>`,
		"fallback": "glyphs-poly:die-1",
	});
}

export default Component;

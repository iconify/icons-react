import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b80p1rbvv.css';
import '../../css/m/momohwbsb.css';
import '../../css/q/qr3zbyjzb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b80p1rbvv"/><path class="momohwbsb"/><path class="qr3zbyjzb"/></g>`,
		"fallback": "glyphs:day-duo",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n2g2lsb9m.css';
import '../../css/m/m6x4a7poi.css';
import '../../css/w/w82_b5rhx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n2g2lsb9m"/><path class="m6x4a7poi"/><path class="w82_b5rhx"/></g>`,
		"fallback": "glyphs:battery-100-duo",
	});
}

export default Component;

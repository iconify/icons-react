import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n2g2lsb9m.css';
import '../../css/y/yumusomwv.css';
import '../../css/r/rhr2acc-n.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n2g2lsb9m"/><path class="yumusomwv"/><path class="rhr2acc-n"/></g>`,
		"fallback": "glyphs:battery-75-duo",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yrimse02m.css';
import '../../css/d/dbxdwkb4l.css';
import '../../css/s/sz-0c-bdy.css';
import '../../css/h/hwrw65e8d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yrimse02m"/><path class="dbxdwkb4l"/><path class="sz-0c-bdy"/><path class="hwrw65e8d"/></g>`,
		"fallback": "streamline-color:business-profession-home-office",
	});
}

export default Component;

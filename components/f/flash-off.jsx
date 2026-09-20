import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lq7k3me4l.css';
import '../../css/h/hh1f6tmth.css';
import '../../css/l/l76wa3b1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lq7k3me4l"/><path class="hh1f6tmth"/><path class="l76wa3b1f"/></g>`,
		"fallback": "streamline-ultimate-color:flash-off",
	});
}

export default Component;

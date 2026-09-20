import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lgmo9snyg.css';
import '../../css/l/lmahle9od.css';
import '../../css/y/ydnf0mblu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lgmo9snyg"/><path class="lmahle9od"/><path class="ydnf0mblu"/></g>`,
		"fallback": "streamline-cyber-color:android",
	});
}

export default Component;

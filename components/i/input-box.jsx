import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x36yqi03d.css';
import '../../css/w/wnrs-5lle.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x36yqi03d"/><path class="wnrs-5lle"/></g>`,
		"fallback": "streamline-color:input-box",
	});
}

export default Component;

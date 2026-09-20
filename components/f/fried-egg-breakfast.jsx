import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/f/f3c393b3p.css';
import '../../css/b/b2lnqy9tj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="f3c393b3p"/><path class="b2lnqy9tj"/></g>`,
		"fallback": "streamline-flex:fried-egg-breakfast",
	});
}

export default Component;

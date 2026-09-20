import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v9sraxyyn.css';
import '../../css/n/n780s9bye.css';
import '../../css/w/w1kb5-rum.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v9sraxyyn"/><path class="n780s9bye"/><path class="w1kb5-rum"/></g>`,
		"fallback": "streamline-color:color-picker",
	});
}

export default Component;

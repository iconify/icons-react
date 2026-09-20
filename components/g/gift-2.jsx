import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z18h9ny6x.css';
import '../../css/w/wq3kycbks.css';
import '../../css/d/dr6zkgbnj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z18h9ny6x"/><path class="wq3kycbks"/><path class="dr6zkgbnj"/></g>`,
		"fallback": "streamline-color:gift-2",
	});
}

export default Component;

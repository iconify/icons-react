import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fea4p0smw.css';
import '../../css/r/r6_cnzb0v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fea4p0smw"/><path class="r6_cnzb0v"/></g>`,
		"fallback": "streamline-color:computer-chip-1",
	});
}

export default Component;

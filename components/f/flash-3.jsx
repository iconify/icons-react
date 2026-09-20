import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zro8ofvtm.css';
import '../../css/i/i1zvjtjrx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zro8ofvtm"/><path class="i1zvjtjrx"/></g>`,
		"fallback": "streamline-flex-color:flash-3",
	});
}

export default Component;

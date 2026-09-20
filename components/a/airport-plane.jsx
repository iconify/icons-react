import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aqjc5ncgm.css';
import '../../css/x/xax65abvc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aqjc5ncgm"/><path class="xax65abvc"/></g>`,
		"fallback": "streamline-flex-color:airport-plane",
	});
}

export default Component;

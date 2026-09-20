import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xd5vpds0d.css';
import '../../css/n/nw0f-gbpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="xd5vpds0d"/><path class="nw0f-gbpt"/></g>`,
		"fallback": "keyline-icons:caret-left-sharp-fill",
	});
}

export default Component;

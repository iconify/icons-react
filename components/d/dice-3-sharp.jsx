import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/x-_5ilohg.css';
import '../../css/y/ysebjhopi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="x-_5ilohg"/><path class="ysebjhopi"/></g>`,
		"fallback": "keyline-icons:dice-3-sharp",
	});
}

export default Component;

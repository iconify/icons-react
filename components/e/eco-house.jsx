import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pxetsgolg.css';
import '../../css/x/xtug8nn5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="pxetsgolg"/><path class="xtug8nn5o"/></g>`,
		"fallback": "streamline-sharp:eco-house",
	});
}

export default Component;

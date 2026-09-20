import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wy8s5efxp.css';
import '../../css/p/pc7966bps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="wy8s5efxp"/><path class="pc7966bps"/></g>`,
		"fallback": "streamline-sharp:hot-spring",
	});
}

export default Component;

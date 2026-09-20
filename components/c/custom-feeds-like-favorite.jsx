import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lgcr7z-tq.css';
import '../../css/f/fbxx0s4hl.css';
import '../../css/z/zt1-qcivb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="lgcr7z-tq"/><path class="fbxx0s4hl"/><path class="zt1-qcivb"/></g>`,
		"fallback": "streamline-sharp:custom-feeds-like-favorite",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/ed3kmcc7e.css';
import '../../css/w/w2zj2_9ae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ed3kmcc7e"/><path class="w2zj2_9ae"/></g>`,
		"fallback": "keyline-icons:diagram-predecessor-sharp-two-tone",
	});
}

export default Component;

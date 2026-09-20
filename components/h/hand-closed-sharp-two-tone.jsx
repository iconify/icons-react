import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/pk93sbcbd.css';
import '../../css/l/lrz9a6_1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="pk93sbcbd"/><path class="lrz9a6_1l"/></g>`,
		"fallback": "keyline-icons:hand-closed-sharp-two-tone",
	});
}

export default Component;

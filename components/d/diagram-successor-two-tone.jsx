import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/le-z6_x1u.css';
import '../../css/p/p82-p0bjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="le-z6_x1u"/><path class="p82-p0bjn"/></g>`,
		"fallback": "keyline-icons:diagram-successor-two-tone",
	});
}

export default Component;

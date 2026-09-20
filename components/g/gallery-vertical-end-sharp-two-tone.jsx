import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/l9i0wwxkf.css';
import '../../css/o/ogwe2lb_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="l9i0wwxkf"/><path class="ogwe2lb_t"/></g>`,
		"fallback": "keyline-icons:gallery-vertical-end-sharp-two-tone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/mr239ib0b.css';
import '../../css/n/nm633saev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="mr239ib0b"/><path class="nm633saev"/></g>`,
		"fallback": "keyline-icons:broom-sharp-two-tone",
	});
}

export default Component;

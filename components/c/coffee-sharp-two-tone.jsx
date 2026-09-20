import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/dnv30bbhf.css';
import '../../css/g/g-oexvm6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="dnv30bbhf"/><path class="g-oexvm6b"/></g>`,
		"fallback": "keyline-icons:coffee-sharp-two-tone",
	});
}

export default Component;

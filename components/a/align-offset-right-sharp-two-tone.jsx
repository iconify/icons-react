import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/v311quo_r.css';
import '../../css/n/n8f3dyh2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="v311quo_r"/><path class="n8f3dyh2u"/></g>`,
		"fallback": "keyline-icons:align-offset-right-sharp-two-tone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/twp-cyb2r.css';
import '../../css/r/r9pj0ab6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="twp-cyb2r"/><path class="r9pj0ab6i"/></g>`,
		"fallback": "keyline-icons:graduation-cap-sharp-two-tone",
	});
}

export default Component;

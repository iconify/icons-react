import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/ejsjn0bqw.css';
import '../../css/s/sde-9bc0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ejsjn0bqw"/><path class="sde-9bc0y"/></g>`,
		"fallback": "keyline-icons:book-open-sharp-two-tone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/agq-vibiy.css';
import '../../css/l/labsonb6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="agq-vibiy"/><path class="labsonb6c"/></g>`,
		"fallback": "keyline-icons:cloud-rain-sharp-two-tone",
	});
}

export default Component;

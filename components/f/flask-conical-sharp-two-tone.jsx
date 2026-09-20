import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/tvbb9gb-d.css';
import '../../css/k/klg4_yvwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="tvbb9gb-d"/><path class="klg4_yvwp"/></g>`,
		"fallback": "keyline-icons:flask-conical-sharp-two-tone",
	});
}

export default Component;

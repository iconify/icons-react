import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/i477xac4d.css';
import '../../css/h/h184-ebwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="i477xac4d"/><path class="h184-ebwz"/></g>`,
		"fallback": "keyline-icons:cpu-sharp-two-tone",
	});
}

export default Component;

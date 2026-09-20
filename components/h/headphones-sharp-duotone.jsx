import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/fvh2ohyhh.css';
import '../../css/i/iny7mab4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="fvh2ohyhh"/><path class="iny7mab4a"/></g>`,
		"fallback": "keyline-icons:headphones-sharp-duotone",
	});
}

export default Component;

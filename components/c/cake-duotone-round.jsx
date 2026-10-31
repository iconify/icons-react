import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zgs6bxbrz.css';
import '../../css/l/lz1tlebjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zgs6bxbrz"/><path class="lz1tlebjy"/></g>`,
		"fallback": "coolicons:cake-duotone-round",
	});
}

export default Component;

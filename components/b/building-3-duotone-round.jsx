import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s-i38pbuq.css';
import '../../css/o/oxf852b1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s-i38pbuq"/><path class="oxf852b1d"/></g>`,
		"fallback": "coolicons:building-3-duotone-round",
	});
}

export default Component;

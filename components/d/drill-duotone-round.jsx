import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m9n9vybaw.css';
import '../../css/y/yckxvub5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m9n9vybaw"/><path class="yckxvub5k"/></g>`,
		"fallback": "coolicons:drill-duotone-round",
	});
}

export default Component;

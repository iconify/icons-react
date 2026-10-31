import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iffzk3bmu.css';
import '../../css/i/i_vvj88ui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iffzk3bmu"/><path class="i_vvj88ui"/></g>`,
		"fallback": "coolicons:column-plus-duotone-round",
	});
}

export default Component;

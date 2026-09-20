import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xquxmub6v.css';
import '../../css/e/e3qz8_40h.css';
import '../../css/y/ypaszccgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="xquxmub6v"/><path class="e3qz8_40h"/><path class="ypaszccgp"/></g>`,
		"fallback": "lets-icons:import-duotone-line",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x575-kbkp.css';
import '../../css/h/hkbq2fb0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x575-kbkp"/><path class="hkbq2fb0j"/></g>`,
		"fallback": "guidance:drinking-fountain",
	});
}

export default Component;

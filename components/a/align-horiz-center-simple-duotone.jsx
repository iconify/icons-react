import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v-zowcbdy.css';
import '../../css/v/vvgx6sx3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v-zowcbdy"/><path class="vvgx6sx3h"/></g>`,
		"fallback": "si:align-horiz-center-simple-duotone",
	});
}

export default Component;

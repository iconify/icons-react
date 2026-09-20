import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lavtv_8_m.css';
import '../../css/j/jnbs5pbma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lavtv_8_m"/><path class="jnbs5pbma"/></g>`,
		"fallback": "tdesign:cabbage",
	});
}

export default Component;

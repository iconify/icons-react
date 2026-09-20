import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/j9npc8b0b.css';
import '../../css/m/mu7-ho2lf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="j9npc8b0b"/><path class="mu7-ho2lf"/></g>`,
		"fallback": "keyline-icons:eye-sharp-two-tone",
	});
}

export default Component;

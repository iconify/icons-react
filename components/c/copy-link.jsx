import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hpwm64sav.css';
import '../../css/i/idi4jubzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="hpwm64sav"/><path class="idi4jubzr"/></g>`,
		"fallback": "streamline-sharp:copy-link",
	});
}

export default Component;

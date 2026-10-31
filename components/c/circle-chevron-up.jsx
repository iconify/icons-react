import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/g/gm4w5e9xe.css';
import '../../css/y/yeh32g35i.css';
import '../../css/r/rgni1ccvd.css';
import '../../css/r/rze47ib2l.css';
import '../../css/v/vtg32ibaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="gm4w5e9xe"/><path class="yeh32g35i"/><path class="rgni1ccvd"/><path class="rze47ib2l"/><path class="vtg32ibaw"/></g>`,
		"fallback": "withicons-retro:circle-chevron-up",
	});
}

export default Component;

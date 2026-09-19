import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pmv003mpv.css';
import '../../css/n/nyrzecbqp.css';
import '../../css/r/r8etlgiam.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pmv003mpv"/><path class="nyrzecbqp"/><path class="r8etlgiam"/></g>`,
		"fallback": "cif:fr",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n3lo1zbbg.css';
import '../../css/r/rcfzbtrno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="n3lo1zbbg"/><path class="rcfzbtrno"/></g>`,
		"fallback": "reicon:gps-filled",
	});
}

export default Component;

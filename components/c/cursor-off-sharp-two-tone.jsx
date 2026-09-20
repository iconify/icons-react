import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/leorv1r5b.css';
import '../../css/h/hli5jabqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="leorv1r5b"/><path class="hli5jabqc"/></g>`,
		"fallback": "keyline-icons:cursor-off-sharp-two-tone",
	});
}

export default Component;

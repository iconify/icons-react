import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/zg157qnlc.css';
import '../../css/a/a802rdadf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="zg157qnlc"/><path class="a802rdadf"/></g>`,
		"fallback": "keyline-icons:baby-2-boy-sharp-two-tone",
	});
}

export default Component;

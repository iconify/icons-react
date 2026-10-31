import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qryuybvjm.css';
import '../../css/x/x4pesup-q.css';
import '../../css/g/ggveb-b_e.css';
import '../../css/x/xpvj_zbjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="qryuybvjm wm-shadow"/><path class="x4pesup-q"/><path class="ggveb-b_e"/><path class="xpvj_zbjb"/></g>`,
		"fallback": "withicons-brutal:avatar-woman-bun",
	});
}

export default Component;

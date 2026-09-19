import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/rz6zd1bra.css';
import '../../css/g/g6wanyb_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="rz6zd1bra"/><path class="g6wanyb_h"/></g>`,
		"fallback": "akar-icons:file",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/w649blafw.css';
import '../../css/n/n0hocebcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="w649blafw"/><path class="n0hocebcg"/></g>`,
		"fallback": "keyline-icons:hand-pointer-left-sharp-two-tone",
	});
}

export default Component;

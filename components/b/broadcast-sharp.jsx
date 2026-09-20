import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/zwnq0nbdv.css';
import '../../css/f/f7d702b9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="zwnq0nbdv"/><path class="f7d702b9j"/></g>`,
		"fallback": "keyline-icons:broadcast-sharp",
	});
}

export default Component;

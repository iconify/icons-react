import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/hfomwszeg.css';
import '../../css/i/iz4z2kisn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="hfomwszeg"/><path class="iz4z2kisn"/></g>`,
		"fallback": "keyline-icons:images-sharp-fill",
	});
}

export default Component;

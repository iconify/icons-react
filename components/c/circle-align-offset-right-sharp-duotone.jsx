import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/bkcd5iben.css';
import '../../css/w/watbwr0lo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="bkcd5iben"/><path class="watbwr0lo"/></g>`,
		"fallback": "keyline-icons:circle-align-offset-right-sharp-duotone",
	});
}

export default Component;

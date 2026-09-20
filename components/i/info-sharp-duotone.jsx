import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/e9ewmybae.css';
import '../../css/f/fxka1pkkt.css';
import '../../css/u/uv9ku2bhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="e9ewmybae"/><path class="fxka1pkkt"/><path class="uv9ku2bhq"/></g>`,
		"fallback": "keyline-icons:info-sharp-duotone",
	});
}

export default Component;

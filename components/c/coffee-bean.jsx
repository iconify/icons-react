import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/w4ibp8b-r.css';
import '../../css/m/m4548_b5v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="w4ibp8b-r"/><path class="m4548_b5v"/></g>`,
		"fallback": "streamline:coffee-bean",
	});
}

export default Component;

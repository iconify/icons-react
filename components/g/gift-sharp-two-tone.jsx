import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/h9jzwwozo.css';
import '../../css/p/pzma0gbxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="h9jzwwozo"/><path class="pzma0gbxg"/></g>`,
		"fallback": "keyline-icons:gift-sharp-two-tone",
	});
}

export default Component;

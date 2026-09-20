import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/b3o7g4byv.css';
import '../../css/f/fpzfo4b8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="b3o7g4byv"/><path class="fpzfo4b8o"/></g>`,
		"fallback": "keyline-icons:easel-sharp-two-tone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/vqx7nhbrs.css';
import '../../css/f/ffsthac_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="vqx7nhbrs"/><path class="ffsthac_t"/></g>`,
		"fallback": "keyline-icons:archive-sharp-two-tone",
	});
}

export default Component;

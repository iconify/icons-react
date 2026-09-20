import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/synr-ojkd.css';
import '../../css/c/cpg4t9x5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="synr-ojkd"/><path class="cpg4t9x5k"/></g>`,
		"fallback": "keyline-icons:car-sharp-fill",
	});
}

export default Component;

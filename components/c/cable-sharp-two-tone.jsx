import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/bacdb-2qp.css';
import '../../css/v/vzc1ikbop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="bacdb-2qp"/><path class="vzc1ikbop"/></g>`,
		"fallback": "keyline-icons:cable-sharp-two-tone",
	});
}

export default Component;

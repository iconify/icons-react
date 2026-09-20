import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/i_prt_8gb.css';
import '../../css/u/usnk3ckai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="i_prt_8gb"/><path class="usnk3ckai"/></g>`,
		"fallback": "keyline-icons:git-pull-request-arrow-sharp-two-tone",
	});
}

export default Component;

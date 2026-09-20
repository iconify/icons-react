import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/gx0xjxlxa.css';
import '../../css/b/bfgkgvs1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="gx0xjxlxa"/><path class="bfgkgvs1u"/></g>`,
		"fallback": "keyline-icons:audio-lines-sharp-two-tone",
	});
}

export default Component;

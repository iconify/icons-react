import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/vfpcfvbpw.css';
import '../../css/r/r0b537ytf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="vfpcfvbpw"/><path class="r0b537ytf"/></g>`,
		"fallback": "keyline-icons:grid-squares-sharp-two-tone",
	});
}

export default Component;

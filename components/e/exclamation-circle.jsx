import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fjyp83b4c.css';
import '../../css/u/uscd_gbsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="fjyp83b4c"/><path class="uscd_gbsf"/></g>`,
		"fallback": "mage:exclamation-circle",
	});
}

export default Component;

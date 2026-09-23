import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/jlo57kb2p.css';
import '../../css/f/flz8mqbuo.css';
import '../../css/e/euvx74byt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="jlo57kb2p"/><path class="flz8mqbuo"/><path class="euvx74byt"/></g>`,
		"fallback": "keyline-icons:gift-sparkles-sharp-two-tone",
	});
}

export default Component;

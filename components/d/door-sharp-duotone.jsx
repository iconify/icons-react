import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/fuzi_tzja.css';
import '../../css/h/hkay-sbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="fuzi_tzja"/><path class="hkay-sbvv"/></g>`,
		"fallback": "keyline-icons:door-sharp-duotone",
	});
}

export default Component;

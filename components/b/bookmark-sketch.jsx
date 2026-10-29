import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z3gwnvuvk.css';
import '../../css/r/ra0fx1pwm.css';
import '../../css/m/mccgqq6yq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="z3gwnvuvk"/><path class="ra0fx1pwm"/><path class="mccgqq6yq"/></g>`,
		"fallback": "withicons:bookmark-sketch",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddj93nnuc.css';
import '../../css/a/ay_q1cpdc.css';
import '../../css/m/mzdzdcbrw.css';
import '../../css/j/jm1mqtufh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddj93nnuc"/><path class="ay_q1cpdc"/><path class="mzdzdcbrw"/><circle class="jm1mqtufh"/>`,
		"fallback": "fxemoji:bicycle",
	});
}

export default Component;

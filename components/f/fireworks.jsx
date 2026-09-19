import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euyzp-gep.css';
import '../../css/n/n0_pd6b2y.css';
import '../../css/i/it6f6naqc.css';
import '../../css/v/vjkf9voyj.css';
import '../../css/c/c-fcwn0fw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="euyzp-gep"/><path class="n0_pd6b2y"/><path class="it6f6naqc"/><path class="vjkf9voyj"/><path class="c-fcwn0fw"/>`,
		"fallback": "fxemoji:fireworks",
	});
}

export default Component;

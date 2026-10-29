import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6b1lpqlu.css';
import '../../css/p/p3xnq8bsq.css';
import '../../css/r/rpe_336wm.css';
import '../../css/v/v3p8b4ben.css';
import '../../css/d/d5vhom0tv.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6b1lpqlu"/><path class="p3xnq8bsq"/><path class="rpe_336wm"/><path class="v3p8b4ben"/><path class="d5vhom0tv"/>`,
		"fallback": "devicon:firebase-wordmark",
	});
}

export default Component;

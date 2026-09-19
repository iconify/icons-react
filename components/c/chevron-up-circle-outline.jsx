import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mujcmz6vw.css';
import '../../css/q/q-tflgzje.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mujcmz6vw"/><path class="q-tflgzje"/>`,
		"fallback": "ion:chevron-up-circle-outline",
	});
}

export default Component;

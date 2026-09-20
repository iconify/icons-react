import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yw3lpkbij.css';
import '../../css/o/ox_05kl4h.css';
import '../../css/x/xi070wb-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yw3lpkbij"/><path class="ox_05kl4h"/><path class="xi070wb-z"/></g>`,
		"fallback": "keyline-icons:circle-trending-down-two-tone",
	});
}

export default Component;

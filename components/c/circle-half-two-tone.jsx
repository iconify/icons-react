import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yw3lpkbij.css';
import '../../css/o/ox_05kl4h.css';
import '../../css/a/a1zr_kb_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yw3lpkbij"/><path class="ox_05kl4h"/><path class="a1zr_kb_y"/></g>`,
		"fallback": "keyline-icons:circle-half-two-tone",
	});
}

export default Component;

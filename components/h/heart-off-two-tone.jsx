import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hzghajbnb.css';
import '../../css/h/h8u2-c9np.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hzghajbnb"/><path class="h8u2-c9np"/></g>`,
		"fallback": "keyline-icons:heart-off-two-tone",
	});
}

export default Component;

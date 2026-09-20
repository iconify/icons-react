import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qj6e6b9kp.css';
import '../../css/n/n3efbnb9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qj6e6b9kp"/><path class="n3efbnb9v"/></g>`,
		"fallback": "tabler:brand-instagram",
	});
}

export default Component;

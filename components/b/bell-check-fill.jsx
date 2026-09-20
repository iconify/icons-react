import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qperobbfd.css';
import '../../css/k/kpao5obta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qperobbfd"/><path class="kpao5obta"/></g>`,
		"fallback": "keyline-icons:bell-check-fill",
	});
}

export default Component;

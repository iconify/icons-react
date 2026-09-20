import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nqh-8w1pp.css';
import '../../css/v/voo1uhrxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nqh-8w1pp"/><path class="voo1uhrxq"/></g>`,
		"fallback": "keyline-icons:cpu-fill",
	});
}

export default Component;

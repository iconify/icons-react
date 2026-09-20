import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/shwa8fsih.css';
import '../../css/w/wrgjoib-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="shwa8fsih"/><path class="wrgjoib-e"/></g>`,
		"fallback": "keyline-icons:flower-two-tone",
	});
}

export default Component;

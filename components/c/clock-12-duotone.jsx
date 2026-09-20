import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h5v13_bfu.css';
import '../../css/h/hs5a_7b1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h5v13_bfu"/><path class="hs5a_7b1n"/></g>`,
		"fallback": "keyline-icons:clock-12-duotone",
	});
}

export default Component;

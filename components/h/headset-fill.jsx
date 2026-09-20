import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o-rra7bzy.css';
import '../../css/b/b_8b-lbec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o-rra7bzy"/><path class="b_8b-lbec"/></g>`,
		"fallback": "keyline-icons:headset-fill",
	});
}

export default Component;

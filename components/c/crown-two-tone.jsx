import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vcobwrb9o.css';
import '../../css/f/f7h3-eqwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vcobwrb9o"/><path class="f7h3-eqwn"/></g>`,
		"fallback": "keyline-icons:crown-two-tone",
	});
}

export default Component;

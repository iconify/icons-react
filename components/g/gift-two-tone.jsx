import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zy1g3fbrq.css';
import '../../css/w/whkhhuxjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zy1g3fbrq"/><path class="whkhhuxjp"/></g>`,
		"fallback": "keyline-icons:gift-two-tone",
	});
}

export default Component;

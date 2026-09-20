import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j41a42nnh.css';
import '../../css/p/pexk4pjdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j41a42nnh"/><path class="pexk4pjdh"/></g>`,
		"fallback": "keyline-icons:coins-two-tone",
	});
}

export default Component;

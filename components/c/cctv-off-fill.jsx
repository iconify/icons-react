import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xeqn_ib4v.css';
import '../../css/p/py1iu7qer.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="xeqn_ib4v"/><path class="py1iu7qer"/></g>`,
		"fallback": "keyline-icons:cctv-off-fill",
	});
}

export default Component;

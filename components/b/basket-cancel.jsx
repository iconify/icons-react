import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ok-u2vboj.css';
import '../../css/b/bu-_flb2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ok-u2vboj"/><path class="bu-_flb2p"/></g>`,
		"fallback": "tabler:basket-cancel",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vs844_b3h.css';
import '../../css/q/qw34h8bgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vs844_b3h"/><path class="qw34h8bgw"/></g>`,
		"fallback": "tabler:info-square",
	});
}

export default Component;

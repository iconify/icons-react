import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l1_3zo_mi.css';
import '../../css/q/qw34h8bgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l1_3zo_mi"/><path class="qw34h8bgw"/></g>`,
		"fallback": "tabler:info-circle",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qm9h2nmjj.css';
import '../../css/q/qw34h8bgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qm9h2nmjj"/><path class="qw34h8bgw"/></g>`,
		"fallback": "tabler:info-octagon",
	});
}

export default Component;

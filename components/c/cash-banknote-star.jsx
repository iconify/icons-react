import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ueahadpnf.css';
import '../../css/v/v3lhotb8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ueahadpnf"/><path class="v3lhotb8k"/></g>`,
		"fallback": "tabler:cash-banknote-star",
	});
}

export default Component;

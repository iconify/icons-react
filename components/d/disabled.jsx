import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fw_j-yrpn.css';
import '../../css/l/l-wkcy2wj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fw_j-yrpn"/><path class="l-wkcy2wj"/></g>`,
		"fallback": "tabler:disabled",
	});
}

export default Component;

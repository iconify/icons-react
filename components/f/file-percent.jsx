import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nxk_2_bfm.css';
import '../../css/w/wff73cbin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nxk_2_bfm"/><path class="wff73cbin"/></g>`,
		"fallback": "tabler:file-percent",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wolay_bix.css';
import '../../css/c/cji-56_8c.css';
import '../../css/k/kzs6q0bkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wolay_bix"/><path class="cji-56_8c"/><path class="kzs6q0bkn"/></g>`,
		"fallback": "vadivam:images",
	});
}

export default Component;

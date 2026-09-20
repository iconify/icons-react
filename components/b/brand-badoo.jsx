import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ut0l4vbpa.css';
import '../../css/d/dzsjbobza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ut0l4vbpa"/><path class="dzsjbobza"/></g>`,
		"fallback": "tabler:brand-badoo",
	});
}

export default Component;

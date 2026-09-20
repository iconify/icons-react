import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f0e_weu-e.css';
import '../../css/n/ndmjvr_ms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f0e_weu-e"/><path class="ndmjvr_ms"/></g>`,
		"fallback": "tabler:circle-arrow-up-left",
	});
}

export default Component;

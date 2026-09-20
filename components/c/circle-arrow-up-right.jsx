import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xw6lefb7b.css';
import '../../css/v/vus27cnms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xw6lefb7b"/><path class="vus27cnms"/></g>`,
		"fallback": "tabler:circle-arrow-up-right",
	});
}

export default Component;

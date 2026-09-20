import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/th1s19bna.css';
import '../../css/v/v9_fprbxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="th1s19bna"/><path class="v9_fprbxy"/></g>`,
		"fallback": "tabler:devices-heart",
	});
}

export default Component;

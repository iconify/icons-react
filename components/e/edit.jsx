import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/ga7t4qtfe.css';
import '../../css/e/e3skoynpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ga7t4qtfe"/><path class="e3skoynpc"/></g>`,
		"fallback": "struq:edit",
	});
}

export default Component;

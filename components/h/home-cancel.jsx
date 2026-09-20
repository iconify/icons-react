import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z8a101bkk.css';
import '../../css/p/pewxaj54e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z8a101bkk"/><path class="pewxaj54e"/></g>`,
		"fallback": "tabler:home-cancel",
	});
}

export default Component;

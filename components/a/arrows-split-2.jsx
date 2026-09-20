import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kfitnrb4y.css';
import '../../css/c/ckm9abbmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kfitnrb4y"/><path class="ckm9abbmf"/></g>`,
		"fallback": "tabler:arrows-split-2",
	});
}

export default Component;

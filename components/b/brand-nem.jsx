import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jc1sxwb0n.css';
import '../../css/j/jy1ke5bkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jc1sxwb0n"/><path class="jy1ke5bkm"/></g>`,
		"fallback": "tabler:brand-nem",
	});
}

export default Component;

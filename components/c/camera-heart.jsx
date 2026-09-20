import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nz_3oac1x.css';
import '../../css/r/rhmw_vzxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nz_3oac1x"/><path class="rhmw_vzxv"/></g>`,
		"fallback": "tabler:camera-heart",
	});
}

export default Component;

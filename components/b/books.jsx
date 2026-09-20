import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pd9x-1bft.css';
import '../../css/f/fhdy_lbru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pd9x-1bft"/><path class="fhdy_lbru"/></g>`,
		"fallback": "tabler:books",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pbje22bpc.css';
import '../../css/b/bahh2x57i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pbje22bpc"/><path class="bahh2x57i"/></g>`,
		"fallback": "tabler:brand-typescript",
	});
}

export default Component;

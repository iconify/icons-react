import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mjz2glbxi.css';
import '../../css/b/bhgqr4h1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mjz2glbxi"/><path class="bhgqr4h1p"/></g>`,
		"fallback": "tabler:brand-crunchbase",
	});
}

export default Component;

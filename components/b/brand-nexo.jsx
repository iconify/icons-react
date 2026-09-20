import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v1xlurbdb.css';
import '../../css/n/niv8i0kwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v1xlurbdb"/><path class="niv8i0kwk"/></g>`,
		"fallback": "tabler:brand-nexo",
	});
}

export default Component;

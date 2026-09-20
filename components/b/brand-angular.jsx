import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fz-3ibcpo.css';
import '../../css/h/hhhg-t-br.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fz-3ibcpo"/><path class="hhhg-t-br"/></g>`,
		"fallback": "tabler:brand-angular",
	});
}

export default Component;

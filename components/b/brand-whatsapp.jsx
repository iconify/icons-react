import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sii_djcar.css';
import '../../css/h/h1s0h2q6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sii_djcar"/><path class="h1s0h2q6f"/></g>`,
		"fallback": "tabler:brand-whatsapp",
	});
}

export default Component;

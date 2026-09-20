import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mmyt3mn_k.css';
import '../../css/s/smli3idsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mmyt3mn_k"/><path class="smli3idsj"/></g>`,
		"fallback": "tabler:heart-handshake",
	});
}

export default Component;

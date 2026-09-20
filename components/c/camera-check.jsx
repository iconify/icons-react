import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ovdhzzqne.css';
import '../../css/k/kz5w3cs8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ovdhzzqne"/><path class="kz5w3cs8l"/></g>`,
		"fallback": "tabler:camera-check",
	});
}

export default Component;

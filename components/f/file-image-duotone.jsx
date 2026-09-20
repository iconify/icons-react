import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xxcb1mbaj.css';
import '../../css/k/kal2pzbbk.css';
import '../../css/k/ks6rcsblm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xxcb1mbaj"/><path class="kal2pzbbk"/><path class="ks6rcsblm"/></g>`,
		"fallback": "keyline-icons:file-image-duotone",
	});
}

export default Component;

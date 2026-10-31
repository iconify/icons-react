import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/skphosbit.css';
import '../../css/z/zy5fjfp2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="skphosbit"/><path class="zy5fjfp2p"/></g>`,
		"fallback": "coolicons:desktop-duocolor-round",
	});
}

export default Component;

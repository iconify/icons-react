import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z76awob8v.css';
import '../../css/q/qa1u-fbgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z76awob8v"/><path class="qa1u-fbgm"/></g>`,
		"fallback": "coolicons:fingerprint-duocolor-round",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/igc2abbsm.css';
import '../../css/s/sxpj81bji.css';
import '../../css/q/q054rm63k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="igc2abbsm"/><path class="sxpj81bji"/><path class="q054rm63k"/></g>`,
		"fallback": "keyline-icons:git-pull-request-draft-fill",
	});
}

export default Component;

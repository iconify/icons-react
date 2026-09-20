import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ynwdr4bpv.css';
import '../../css/v/vfnvfqbwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ynwdr4bpv"/><path clip-rule="evenodd" class="vfnvfqbwt"/></g>`,
		"fallback": "keyline-icons:cable-fill",
	});
}

export default Component;

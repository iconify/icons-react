import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z5pkq5d0j.css';
import '../../css/h/hgkgp9enu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="z5pkq5d0j"/><path class="hgkgp9enu"/></g>`,
		"fallback": "keyline-icons:hat-glasses-fill",
	});
}

export default Component;

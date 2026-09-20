import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g70whwsdk.css';
import '../../css/k/kgkgp47br.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g70whwsdk"/><path class="kgkgp47br"/></g>`,
		"fallback": "keyline-icons:badge-plus-duotone",
	});
}

export default Component;

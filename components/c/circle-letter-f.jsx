import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xya-gqajm.css';
import '../../css/w/wnpkb0yso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xya-gqajm"/><path class="wnpkb0yso"/></g>`,
		"fallback": "tabler:circle-letter-f",
	});
}

export default Component;

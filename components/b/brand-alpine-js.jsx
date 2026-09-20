import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k3l0a5zon.css';
import '../../css/z/zkvi0rb8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k3l0a5zon"/><path class="zkvi0rb8h"/></g>`,
		"fallback": "tabler:brand-alpine-js",
	});
}

export default Component;

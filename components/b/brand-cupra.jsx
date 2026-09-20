import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m624ijbfc.css';
import '../../css/k/kcdnarbmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m624ijbfc"/><path class="kcdnarbmk"/></g>`,
		"fallback": "tabler:brand-cupra",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/km8umkb6d.css';
import '../../css/f/f91_gtbcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="km8umkb6d"/><path class="f91_gtbcy"/></g>`,
		"fallback": "akar-icons:hand",
	});
}

export default Component;

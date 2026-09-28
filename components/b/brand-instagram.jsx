import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p0k1vsbsw.css';
import '../../css/e/eb6d6ps8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p0k1vsbsw"/><path class="eb6d6ps8k"/></g>`,
		"fallback": "tabler:brand-instagram",
	});
}

export default Component;

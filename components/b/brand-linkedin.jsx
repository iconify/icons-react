import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zm8x_0d1b.css';
import '../../css/p/p0k1vsbsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zm8x_0d1b"/><path class="p0k1vsbsw"/></g>`,
		"fallback": "tabler:brand-linkedin",
	});
}

export default Component;

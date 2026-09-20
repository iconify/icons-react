import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nzgqy2toz.css';
import '../../css/u/uadr4mbak.css';
import '../../css/o/o35n15qhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nzgqy2toz"/><path class="uadr4mbak"/><path class="o35n15qhk"/></g>`,
		"fallback": "tabler:brand-arc",
	});
}

export default Component;

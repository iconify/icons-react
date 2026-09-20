import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yv2ivpbyb.css';
import '../../css/i/id8yb0b3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yv2ivpbyb"/><path class="id8yb0b3r"/></g>`,
		"fallback": "tabler:basket-discount",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/skq7rbv_x.css';
import '../../css/y/y5d1eqbox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="skq7rbv_x"/><path class="y5d1eqbox"/></g>`,
		"fallback": "tabler:alarm",
	});
}

export default Component;

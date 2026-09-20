import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dukj5j6oy.css';
import '../../css/e/e41j0kibb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dukj5j6oy"/><path class="e41j0kibb"/></g>`,
		"fallback": "keyline-icons:contacts-duotone",
	});
}

export default Component;

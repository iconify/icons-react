import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/op65fjs0v.css';
import '../../css/e/et80wibgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="op65fjs0v"/><path class="et80wibgl"/></g>`,
		"fallback": "tabler:device-3d-lens",
	});
}

export default Component;

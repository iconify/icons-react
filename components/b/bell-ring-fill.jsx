import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u-8ntgb6v.css';
import '../../css/m/mmzbty-9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u-8ntgb6v"/><path class="mmzbty-9y"/></g>`,
		"fallback": "keyline-icons:bell-ring-fill",
	});
}

export default Component;

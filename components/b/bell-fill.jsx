import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u-8ntgb6v.css';
import '../../css/e/e8wczdb4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u-8ntgb6v"/><path class="e8wczdb4y"/></g>`,
		"fallback": "keyline-icons:bell-fill",
	});
}

export default Component;

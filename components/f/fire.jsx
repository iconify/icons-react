import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lgeklo62v.css';
import '../../css/n/npblx47nm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lgeklo62v"/><path class="npblx47nm"/></g>`,
		"fallback": "heroicons-outline:fire",
	});
}

export default Component;

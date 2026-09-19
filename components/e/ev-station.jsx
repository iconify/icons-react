import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/go4i3w7cb.css';
import '../../css/e/e12zghbho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="go4i3w7cb"/><path class="e12zghbho"/>`,
		"fallback": "boxicons:ev-station",
	});
}

export default Component;

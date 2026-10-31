import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d7a72rbea.css';
import '../../css/z/zw81kzbsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d7a72rbea"/><path class="zw81kzbsu"/></g>`,
		"fallback": "coolicons:coffee-duotone-round",
	});
}

export default Component;

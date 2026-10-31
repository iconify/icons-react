import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/smbmhtbpr.css';
import '../../css/w/wnjdkbc4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="smbmhtbpr"/><path class="wnjdkbc4m"/></g>`,
		"fallback": "withicons-retro:arrow-right",
	});
}

export default Component;

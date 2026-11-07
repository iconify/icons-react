import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgubodb0p.css';
import '../../css/u/uj0gagb6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgubodb0p"/><path clip-rule="evenodd" class="uj0gagb6s"/>`,
		"fallback": "solar:balloon-outline",
	});
}

export default Component;

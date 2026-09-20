import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a3bildhzo.css';
import '../../css/n/nfxanex5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="a3bildhzo"/><path class="nfxanex5e"/></g>`,
		"fallback": "solar:bug-line-duotone",
	});
}

export default Component;

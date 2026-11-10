import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nxa2e8arp.css';
import '../../css/v/vig86kb1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nxa2e8arp"/><path class="vig86kb1z"/></g>`,
		"fallback": "andrsrxn:align-box-bottom-center",
	});
}

export default Component;

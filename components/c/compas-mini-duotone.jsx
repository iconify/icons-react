import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qdcp97bil.css';
import '../../css/i/ipa5egzyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qdcp97bil"/><circle class="ipa5egzyv"/></g>`,
		"fallback": "lets-icons:compas-mini-duotone",
	});
}

export default Component;

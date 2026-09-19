import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nwup8u09h.css';
import '../../css/f/folh-y6em.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="nwup8u09h"/><path class="folh-y6em"/></g>`,
		"fallback": "hugeicons:greek-helmet",
	});
}

export default Component;

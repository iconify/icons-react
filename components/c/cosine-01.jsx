import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bp0pfib6n.css';
import '../../css/k/kz34wspah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bp0pfib6n"/><path class="kz34wspah"/></g>`,
		"fallback": "hugeicons:cosine-01",
	});
}

export default Component;

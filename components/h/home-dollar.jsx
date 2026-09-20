import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/irt6x4y7p.css';
import '../../css/y/y6_chdcab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="irt6x4y7p"/><path class="y6_chdcab"/></g>`,
		"fallback": "tabler:home-dollar",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xl6d5ydwt.css';
import '../../css/r/ra5x8bc4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xl6d5ydwt"/><path class="ra5x8bc4g"/></g>`,
		"fallback": "tabler:brand-firebase",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ytto-3_yv.css';
import '../../css/w/w8yc4zbns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ytto-3_yv"/><path class="w8yc4zbns"/></g>`,
		"fallback": "tabler:creative-commons-off",
	});
}

export default Component;

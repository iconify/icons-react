import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mkz22f2th.css';
import '../../css/y/y802_sbvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mkz22f2th"/><path class="y802_sbvu"/></g>`,
		"fallback": "coolicons:clipboard-plus-duocolor-round",
	});
}

export default Component;

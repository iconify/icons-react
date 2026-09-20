import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cmtmnmbkq.css';
import '../../css/c/cpypyr0zn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cmtmnmbkq"/><path class="cpypyr0zn"/></g>`,
		"fallback": "tabler:brand-drupal",
	});
}

export default Component;
